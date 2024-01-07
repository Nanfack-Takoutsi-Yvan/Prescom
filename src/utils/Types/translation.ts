/* eslint-disable @typescript-eslint/no-unused-vars */
type ContentfulData = {
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
      }[]
    }[]
  }
}

type RawContentfulText = {
  content: {
    content: {
      value: string
    }[]
  }[]
}

type AppPagesContent = {
  name: string
  title: string
  description: string
  subPages: {
    title: string
  }[]
  assets: Record<string, string>
}

type NavItem = {
  uri: string
  name: string
  subPages?: {
    title: string
  }[]
}
