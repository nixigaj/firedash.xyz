// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('./res/prism-themes/vsLight');
const darkCodeTheme = require('./res/prism-themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Firedash',
  tagline: 'Taking intuitive networking to the next level',
  favicon: 'img/brand/favicon.ico',

  // Set the production url of your site here
  url: 'https://firedash.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nixigaj', // Usually your GitHub org/user name.
  projectName: 'firedash.xyz', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/nixigaj/firedash.xyz/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/nixigaj/firedash.xyz/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/brand/social-card.png',
      navbar: {
        title: 'Firedash',
        logo: {
          alt: 'Firedash Logo',
          src: 'img/brand/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/community', label: 'Community', position: 'left'},
          {href: 'https://github.com/nixigaj/firedash/tree/master/CONTRIBUTING.md', label: 'Contribute', position: 'right'},
          {
            href: 'https://github.com/nixigaj/firedash',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Firedash',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/nixigaj/firedash/tree/master/CONTRIBUTING.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.firedash.org',
              },
              {
                label: 'Matrix',
                to: '/community#matrix',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'Firedash',
                href: 'https://github.com/nixigaj/firedash',
              },
              {
                label: 'This website',
                href: 'https://github.com/nixigaj/firedash.xyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Erik Junsved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
