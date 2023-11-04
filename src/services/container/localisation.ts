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

  public getTranslations() {
    this.loadTranslations()
    return this.contentFullTranslationData
  }
}

export default LocalizationService
