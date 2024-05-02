import { createApp } from 'vue'
import App from './App.vue'

import './components/styles/general.scss';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle'

import { router } from './router'

createApp(App).use(router).mount('#app')
