module.exports = {
  siteMetadata: {
    title: 'Material UI Layout',
    version: 'v1.0.0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Material UI Layout',
        short_name: 'MUL',
        start_url: '/',
        background_color: '#18232B',
        theme_color: '#E72476',
        display: 'minimal-ui',
        icon: 'src/images/MUL_Icon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120164020-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: 911645,
        sv: 6,
      },
    },
    'gatsby-plugin-offline',
  ],
};
