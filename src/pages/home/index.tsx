import { type HeadFC } from 'gatsby'
import * as React from 'react'

const Home: React.FC = () => {
  return <div>Hello world</div>
}

export default Home
export const Head: HeadFC = () => <title>Home Page</title>
