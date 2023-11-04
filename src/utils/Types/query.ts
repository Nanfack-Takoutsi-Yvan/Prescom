/* eslint-disable @typescript-eslint/no-unused-vars */
interface ContentfulData {
  allContentfulPrcPages: {
    nodes: {
      name: string
      node_locale: string
      title: string
      uri: string
      description: {
        raw: string
      }
      subPages: {
        node_locale: string
        title: string
      }[]
      assets: {
        key: string
        node_locale: string
        value: {
          raw: string
        }
      }
    }[]
  }
}

interface RawContentfulText {
  content: {
    content: {
      value: string
    }[]
  }[]
}
