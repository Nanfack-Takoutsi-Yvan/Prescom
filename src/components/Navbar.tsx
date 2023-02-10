import * as React from 'react'
import { useThemeContext } from '../../utils/dataContext'

const NavBar: React.FC = () => {
  const { findElementByKey } = useThemeContext()

  return (
    <header>
      <nav>{findElementByKey('helloworld')}</nav>
    </header>
  )
}

export default NavBar
