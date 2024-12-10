import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserProfilePage from '@/views/UserProfilePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfilePage,
    props: true,
    meta: {
      requiresAuth: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('isLoggedIn')) {
      // Redirect to the login page if not logged in
      next('/login');
    } else {
      // Proceed to the requested page if logged in
      next();
    }
  } else {
    // If the route does not require authentication, allow navigation
    next();
  }
});

export default router;
