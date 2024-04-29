import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue'; 
import DoctorsIndex from './views/DoctorsIndex.vue'; 

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
        // {
        //     path: '/:patchMatch(.*)*',
        //     name: 'not-found',
        //     component: NotFound,
        // },
    ]
})

export { router };