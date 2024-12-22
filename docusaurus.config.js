const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'B Bots Docs',
  tagline: 'Official Docs of B Bots',
  url: 'https://docs.berni.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b-bots', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic', 
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/b-bots/docs/edit/main/',
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
      navbar: {
        title: 'B Bots',
        logo: {
          alt: 'B Bots Logo',
          src: 'img/b-bots.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },  
          {
            href: 'https://discord.gg/WWvWAHHD22',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
        ],
        // logo: {
        //   alt: 'B Bots',
        //   src: 'img/b-bots.png',
        //   className: 'footer-logo',
        //   width: 100,
        //   height: 100,
        // },
        copyright: `Copyright © ${new Date().getFullYear()} by Berni`,
      },
      prism: {
        theme: darkCodeTheme,
        // darkTheme: lightCodeTheme,
      },
    }),
});
