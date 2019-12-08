require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.prototype.$http = window.axios;
Vue.use(VueRouter);

// Navbar
Vue.component('app-nav', require('./components/_nav.vue').default);

const router = new VueRouter({
	mode: 'history',
	routes
})

const app = new Vue({
	router,
	data: {
		loading: false
	}
}).$mount('#app');

router.beforeEach((to, from, next) => {
	next()
})
