// import 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js'
// import 'https://cdn.jsdelivr.net/npm/quasar-framework@^0.17.0/dist/umd/quasar.mat.umd.min.js'
// import 'https://cdn.jsdelivr.net/npm/quasar-framework@^0.17.0/dist/umd/i18n.es.umd.min.js'

Quasar.i18n.set(Quasar.i18n.es)

new Vue({
    el: '#q-app',
    data: function () {
        return {
        version: Quasar.version,
        drawerState: true, 
        }
    },
    methods: {
        launch: function (url) {
        Quasar.utils.openURL(url)
        }
    }
})