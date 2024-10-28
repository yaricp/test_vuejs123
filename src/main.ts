import '@babel/polyfill';
// Import Component hooks before component definitions
import Vue from 'vue';
import './plugins/vee-validate';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';

Vue.config.productionTip = false;

const app = new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

