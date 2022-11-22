import '@/assets/styles/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMagnifyingGlass,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

library.add(faPlus, faMagnifyingGlass, faXmark);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app');
