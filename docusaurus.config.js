module.exports = {
  title: '✈️  react-google-flight-datepicker',
  tagline: 'Google Flight date-picker implemented in ReactJS',
  url: 'https://JSLancerTeam.github.io/datepicker',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jslancer', // Usually your GitHub org/user name.
  projectName: 'react-google-flight-datepicker', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'react-google-flight-datepicker',
      logo: {
        alt: 'react-google-flight-datepicker',
        src: 'img/logo.svg'
      },
      links: [
        {
          to: 'https://github.com/JSLancerTeam/react-google-flight-datepicker',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} JSLancer. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
