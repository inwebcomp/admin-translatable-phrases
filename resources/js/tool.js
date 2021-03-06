import Tool from './components/Tool'

App.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'translatable-phrases',
            path: '/translatable-phrases/:selectedLocale?',
            components: {
                default: Tool,
                header: Vue.component('app-header'),
                sidebar: Vue.component('app-sidebar')
            },
            props: {
                default: true
            }
        },
    ])
})
