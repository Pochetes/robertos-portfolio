require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Roberto M`,
    siteTitleAlt: `Roberto Martinez`,
    siteHeadline: `Roberto Martinez's Portfolio`,
    siteUrl: `http://localhost:8000`,
    siteDescription: `The amazing life of Roberto Martinez and his journey as an engineer and innovator.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@iamrobmart`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roberto Martinez Portfolio`,
        short_name: `portfolio`,
        description: `Smooth and powerful portfolio website of Roberto Martinez`,
        start_url: `/`,
        background_color: `#141835`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: true,
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/Layout.tsx")
        }
      }
    },
    `gatsby-plugin-postcss`
  ].filter(Boolean),
}
