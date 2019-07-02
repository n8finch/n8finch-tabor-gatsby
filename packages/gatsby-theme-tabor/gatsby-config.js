const path = require(`path`)
// Plugins
const autoprefixer = require("autoprefixer")

module.exports = ({ wordPressUrl }) => ({
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `All the Things`,
        short_name: `All the Things`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${wordPressUrl}/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"],
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72004715-1",
      },
    },
    
  ],
})
