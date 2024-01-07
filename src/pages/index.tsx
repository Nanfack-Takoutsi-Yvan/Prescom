import { type HeadFC } from 'gatsby'
import * as React from 'react'
import * as styles from './styles.module.scss'
import { getAppContext } from '../services/contexts/appStateContext'

const Home: React.FC = () => {
  const { content } = getAppContext()
  return (
    <div className={styles.helloworld}>
      {content?.assets.homePage_hello_world}
    </div>
  )
}

export default Home

export const Head: HeadFC = () => {
  return (
    <>
      <title>Prescom Corporation Group</title>
      <meta />
    </>
  )
}
