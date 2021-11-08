import Vue from 'vue'
import Vuex from 'vuex';
import Router from 'vue-router';

Vue.use(Router);
Vue.use(Vuex);

import './inputComponents';
import App from './App.vue';
import router from '@/router';
import store from '@/stores';

Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
