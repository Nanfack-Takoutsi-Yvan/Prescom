// More about .env: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
import type { GatsbyConfig } from 'gatsby'

require("dotenv").config({ // eslint-disable-line
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Prescom',
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
    },
  }, 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-plugin-google-gtag', 'gatsby-plugin-sass', 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: `gatsby-plugin-google-gtag`, // learn more: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
    options: {
      trackingIds: [
        process.env.GA_TRACKING_ID,
      ],
      pluginConfig: {
        head: true,
        anonynize: true,
      },
    },
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://www.cdnfonts.com/`, `https://www.cdnfonts.com/euclid-circular-b.font`],
      web: [
        {
          name: `Euclid Circular B`,
          file: `https://fonts.cdnfonts.com/css/euclid-circular-b`,
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/prescom.png"
    }
  }],
}

export default config
