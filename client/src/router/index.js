import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const index = new VueRouter({
    mode: 'history',
    base: 'localhost:8080',
    routes
});



export default index;
