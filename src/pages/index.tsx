import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import { DatasContextProvider } from '../../utils/dataContext'
import Home from '../components/Home'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DatasContextProvider>
      <Layout>
        <Home />
      </Layout>
    </DatasContextProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Prescom</title>
