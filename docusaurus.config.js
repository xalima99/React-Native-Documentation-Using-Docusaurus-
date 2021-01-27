module.exports = {
  title: 'AxaLib',
  tagline: 'An Axa Assurance\'s React Native Components Guide',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xalima99', // Usually your GitHub org/user name.
  projectName: 'axaLib', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AxaLib',
      logo: {
        alt: 'My Site Logo',
        src: 'https://new-axa-prod.s3.amazonaws.com/web-guidelines%2Ffef0dac1-e6f2-4b3a-b221-6914d0b014ea_axa_logo_solid_rgb.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
     
        {
          href: 'https://github.com/xalima99',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      
      copyright: `Copyright © ${new Date().getFullYear()} AxaLib Project, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/xalima99',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/xalima99',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
