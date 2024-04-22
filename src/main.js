import { createApp } from 'vue'
import App from './App.vue'

import './components/styles/general.scss';
import 'bootstrap/dist/css/bootstrap.css'; 

createApp(App).mount('#app')

import { router } from './router'

createApp(App).use(router).mount('#app')
