module.exports = {
  siteMetadata: {
    siteUrl: "https://www.evgenyprikhodko.com",
    title: "personal blog of Evgeny Prikhodko",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
}
