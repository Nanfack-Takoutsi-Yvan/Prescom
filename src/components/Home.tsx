import React from 'react'
import { useThemeContext } from '../../utils/dataContext'

export default function Home() {
  const { findElementByKey } = useThemeContext()
  return <section>{findElementByKey('dshfd')}</section>
}
