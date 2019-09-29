module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'La ferme du Gapeau', // Navigation and Site Title
  siteTitleAlt: 'Esat la ferme du Gapeau', // Alternative Site title for SEO
  siteTitleManifest: 'FDG',
  siteUrl: 'https://demo-styled-component.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'fr', // Language Tag on <html> element
  siteHeadline: 'Site de démo pour un cours', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Cours sur l\'utilisation de styled component', // Your site description
  author: 'Mik@el', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@minimal', // Twitter Username - Optional
  ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'fr_Fr', // Facebook Language
  googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#53AD53',
  backgroundColor: '#2b2e3c',
}
