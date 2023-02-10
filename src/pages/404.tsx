import * as React from 'react'
import { PageProps, HeadFC, Link } from 'gatsby'
import '../styles/404.css'

const NotFoundPage: React.FC<PageProps> = () => (
  <main className="error-page">
    <h1>404</h1>
    <h2>Oops! Page not found</h2>
    <p>The page you are looking for doesn&apos;t seem to exist.</p>
    <Link to="/">Go back to the homepage</Link>
  </main>
)

export default NotFoundPage

export const Head: HeadFC = () => (
  <>
    <title>Not found - Prescom</title>
    <meta name="robots" content="noindex" />
  </>
)
