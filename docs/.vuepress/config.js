module.exports = {
  title: 'eClass Docencia',
  description: 'Guía para el uso de aplicación eClass Docencia',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Guía', link: '/guide/features' },
      { text: 'Android', link: 'https://play.google.com/store/apps/details?id=com.eclass.docente' },
      { text: 'iOS', link: 'https://itunes.apple.com/cl/app/eclass-docencia/id1375058749?l=es&mt=8' },
    ],
    sidebar: [
      {
        title: 'Guía',
        collapsable: false,
        children: [
          '/guide/features',
          '/guide/install',
          '/guide/login',
          '/guide/home',
          '/guide/class',
          '/guide/confirmed',
        ]
      }

    ]
  }
}
