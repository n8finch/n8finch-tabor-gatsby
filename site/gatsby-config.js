module.exports = {
  siteMetadata: {
    title: `All the Things`,
    description: `Keeping it clever...`,
    author: `@n8finch`,
    wordPressUrl: `http://dev-n8finch.pantheonsite.io`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `http://dev-n8finch.pantheonsite.io` },
    },
  ],
};
