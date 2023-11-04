/* eslint-disable react/jsx-no-undef */
import * as React from 'react'
import { type HeadFC, type PageProps } from 'gatsby'
import useCursor from '../services/hooks/cursor'
import Navbar from '../components/ui/navbar/navbar'
import './index.module.scss'

const IndexPage: React.FC<PageProps> = () => {
  useCursor()

  return (
    <main>
      <Navbar />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
