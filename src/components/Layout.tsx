import React, { ReactElement, useContext, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NavBar from './Navbar'
import Footer from './Footer'
import formatData from '../../utils/format'
import { datasContext } from '../../utils/dataContext'

const Layout = ({ children }: { children: ReactElement }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAssets {
        nodes {
          id
          key
          value {
            value
          }
        }
      }
    }
  `)
  const assets = data.allContentfulAssets.nodes
  console.log(assets)

  const { setValue } = useContext(datasContext)

  useEffect(() => {
    setValue(formatData(assets))
  }, [])
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
