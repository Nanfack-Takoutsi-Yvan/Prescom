import * as React from 'react'

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => <header>{siteTitle}</header>

export default Header
