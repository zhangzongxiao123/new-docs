// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SINOHOPE',
  tagline: 'All-in-one Platform for Digital Assets Custody',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zhangzongxiao123.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/new-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhangzongxiao123', // Usually your GitHub org/user name.
  projectName: 'new-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SINOHOPE',
        logo: {
          alt: 'SINOHOPE Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Use
          {
            label: 'Use',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'solutionsSidebar',
                label: 'Products&Solutions',
                to: '/docs/use/solutions/intro',
              },
              {
                label: 'BOOK DEMO',
                to: 'https://sinohope.com',
              },
              {
                type: 'docSidebar',
                sidebarId: 'userGuideSidebar',
                label: 'User Guide',
                to: '/docs/use/user-guide/intro',
              },
            ],
          },

          // Learn
          {
            label: 'Learn',
            position: 'left',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                type: 'docSidebar',
                sidebarId: 'newsSidebar',
                label: 'News',
                to: '/docs/learn/news/intro',
              },
              {
                label: '新火公开课',
                to: 'https://space.bilibili.com/3493266041342842/channel/series',
              },
            ],
          },

          // Develop
          {
            label: 'Develop',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'getStartedSidebar',
                label: 'Get Started',
                to: '/docs/develop/get-started/intro',
              },
              {
                type: 'docSidebar',
                sidebarId: 'openLoopApiSidebar',
                label: 'OpenLoop API',
                to: '/docs/develop/openloop-api/intro',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mpcApiSidebar',
                label: 'MPC WaaS API',
                to: '/docs/develop/mpc-waas-api/intro',
              },
              {
                type: 'docSidebar',
                sidebarId: 'fullCustodyApiSidebar',
                label: 'Full Custody WaaS API',
                to: '/docs/develop/full-custody-waas-api/intro',
              }
            ],
          },

          //community
          {
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Feedback',
                to: 'https://github.com/sinohope/feedback',
              },
              {
                label: 'Telegram',
                to: 'https://t.me/SINOHOPE_DEV',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/SinohopeGroup',
              },
            ],
          },

          //right
          {
            href: 'https://github.com/sinohope',
            label: 'GitHub',
            position: 'right',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SINOHOPE. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
