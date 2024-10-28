import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUS from '@/locales/en-US.json';
import ruRU from '@/locales/ru-RU.json';
import kzKZ from '@/locales/kz-KZ.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'en': enUS,
    'ru': ruRU,
    'kz': kzKZ
  }
});
export default i18n;