import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/theme.scss';
import './assets/styles/navigation.scss';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
