import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue'; 
import DoctorsIndex from './views/DoctorsIndex.vue'; 
import ShowSingleDoctor from './views/ShowSingleDoctor.vue';
import PaymentSection from './components/PaymentSection.vue';

import NotFound from './views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/doctors',
            name: 'getDoctors',
            component: DoctorsIndex,
        },
        {
            path: '/doctors/:slug',
            name: 'single-doctor',
            component: ShowSingleDoctor,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
        {
            path: '/payment',
            name: 'payment',
            component: PaymentSection,
        }
    ]
})

export { router };