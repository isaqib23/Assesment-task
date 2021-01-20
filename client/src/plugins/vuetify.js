import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon, VForm } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar-ng'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

let colors = {
    "primary"       : "#007bff",
    "primaryAccent" : "#707070",
    "secondary"     : "#000000",
    "accent"        : "#262851",
    "error"         : "#FF5252",
    "info"          : "#2196F3",
    "success"       : "#4CAF50",
    "warning"       : "#FFC107",
    "purple"        : "#7579FF",
    "purpleAccent"  : "#B125EF",
    "pink"          : "#FF7575",
    "pinkAccent"    : "#E62ECE",
    "indigo"        : "#7579FF",
    "indigoAccent"  : "#4525EF",
    "newBlue"       : "#0ACFFE",
    "blueAccent"    : "#4481EB",
    "decent"        : "#53508C"
};

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon,
        VForm
    }
})
Vue.use(VuetifyToast)

export default new Vuetify({
    theme   : {
        dark    : false,
        themes  : {
            light   : colors
        }
    },
    icons   : {
        iconfont    : 'mdi',
    },
    options: {
        customProperties: true
    }
})
