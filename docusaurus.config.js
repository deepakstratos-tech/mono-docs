const config = {
  title: 'Mono Docs',
  tagline: 'Developer documentation for the Mono Monocarton Imposition Planner',
  favicon: 'img/favicon.ico',
  url: 'https://deepakstratos-tech.github.io',
  baseUrl: '/mono-docs/',
  organizationName: 'deepakstratos-tech',
  projectName: 'mono-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Mono Docs',
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { href: 'https://deepakstratos-tech.github.io/monocarton-editor', label: 'Open Mono', position: 'right' },
        { href: 'https://github.com/deepakstratos-tech', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built by Deepak · Mono Monocarton Imposition Planner`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['python', 'bash', 'json'],
    },
  },
};

module.exports = config;