module.exports = {
  siteMetadata: {
    title: `All the Things`,
    description: `Keeping it clever...`,
    author: `@n8finch`,
    wordPressUrl: `https://n8finch.com`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://n8finch.com` },
    },
  ],
};
