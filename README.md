My fork of the Tabor Gatsby theme for my personal blog.

OG Repo: 
---

# Tabor Gatsby Theme
A port of the Tabor WordPress Theme over to Gatsby 

## Demo
Checkout the [Tabor Theme Demo](https://tabor-gatsby-theme.netlify.com/) to see what the site looks like in action.

## How to use this repo

```
# Clone the repo
git clone https://github.com/zgordon/tabor-gatsby-theme.git

# Move into the new directory
cd tabor-gatsby-theme

# Install dependencies
yarn

# Change the site/gatsby-config.js file to reference your WordPress install, e.g.:
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

# Start the site on http://localhost:8000
yarn workspace site develop
```

## For Help
Please open an issue if you find one, this is a V1 and work in progress :)
