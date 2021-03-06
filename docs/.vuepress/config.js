module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'es-ES',
      title: 'eClass Docencia',
      description: 'Aplicación móvil para docentes'
    },
    '/en/': {
      lang: 'en-US',
      title: 'eClass Docencia',
      description: 'Mobile application for teachers'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/icon.png` }]
  ],
  themeConfig: {
    editLinks: false,
    locales: {
      '/': {
        label: 'Español',
        selectText: 'Idiomas',
        editLinkText: '',
        lastUpdated: 'Última actualización',
        nav: require('./nav/es'),
        sidebar: {
          '/guide/': getGuideSidebar('Guía')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: '',
        lastUpdated: 'Last update',
        nav: require('./nav/en'),
        sidebar: {
          '/en/guide/': getGuideSidebar('Guide')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/i18n-ui',!ctx.isProd],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ]
})

const getGuideSidebar = groupA => {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'install',
        'login',
        'home',
        'attendance',
        'class',
        'evaluations',
        'evaluation'
      ]
    }
  ]
}
