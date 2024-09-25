import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import LoginView from '../views/Auth/LoginView.vue';
import ProtectedView from '../views/ProtectedView.vue';
import RegisterView from '@/views/Auth/RegisterView.vue';
import { requiresAuth } from './auth';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView,
    },
    { path: '/protected', component: ProtectedView, meta: { requiresAuth: true } },
    {
        path: '/register', name: RegisterView, component: RegisterView,
    },
    {
        path: '/dashboard', name: 'Dashboard', component: () => import('../views/DashboardPage.vue'), beforeEnter: requiresAuth,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
