import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DatetimePicker from 'vuetify-datetime-picker';

Vue.use(Vuetify);
Vue.use(DatetimePicker);

const opts = {
     icons: {
        iconfont: "mdi" ,
     },
}

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
          primary: '#0A93F3',
          secondary: '#006622',
          accent: '#ff5722',
          error: '#ff0000',
          warning: '#ffc107',
          info: '#03a9f4',
          success: '#cddc39',
      },
    },
  },
})
