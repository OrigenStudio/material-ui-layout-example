module.exports = {
  siteMetadata: {
    title: 'Material UI Layout',
    version: 'v0.1.0-rc.4',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Material UI Layout',
        short_name: 'MUL',
        start_url: '/',
        background_color: '#18232B',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/MUL_Icon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/MUL_Icon.jpg',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
