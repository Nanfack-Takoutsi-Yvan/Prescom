import { graphql, useStaticQuery } from 'gatsby'

class LocalizationService {
  private contentFullTranslationData?: ContentfulData

  constructor() {
    this.contentFullTranslationData = undefined
  }

  private loadTranslations() {
    this.contentFullTranslationData = useStaticQuery(graphql`
      query MyQuery {
        allContentfulPrcPages {
          nodes {
            uri
            title
            subPages {
              node_locale
              title
            }
            node_locale
            name
            assets {
              key
              node_locale
              value {
                raw
              }
            }
            description {
              raw
            }
          }
        }
      }
    `)
  }

  private parseContentfullData() {
    this.loadTranslations()
    const localizedData: Record<string, { [key: string]: AppPagesContent }> = {}
    this.contentFullTranslationData?.allContentfulPrcPages?.nodes.forEach(
      (node) => {
        const locale = node.node_locale.split('-')[0]
        let pageDescription: RawContentfulText | null = null
        const pageAssets: AppPagesContent['assets'] = {}
        if (!localizedData[locale]) localizedData[locale] = {}
        if (node.description) pageDescription = JSON.parse(node.description.raw)
        if (node.assets)
          node.assets.forEach((asset) => {
            const content: RawContentfulText = JSON.parse(asset.value.raw)
            pageAssets[asset.key] = content.content[0].content[0].value
          })
        localizedData[locale][node.uri] = {
          name: node.name,
          title: node.title,
          description: pageDescription?.content[0].content[0].value ?? '',
          subPages: [],
          assets: pageAssets
        }
      }
    )
    return localizedData
  }

  public getTranslations() {
    return this.parseContentfullData()
  }
}

export default LocalizationService
