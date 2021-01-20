import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import index from './router';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDqZGDTPpIiusoEZBUmYyPWybFj_RQX8vY',
        libraries: 'places',
    },
    installComponents: true
})

window.Vue = Vue;
window.axios = axios;
Vue.config.productionTip = false

export const app = new Vue({
    vuetify,
    router: index,
    render: h => h(App),
}).$mount('#app');
