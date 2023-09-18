import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '/', component: () => import('pages/HomePage.vue') },
      { name: 'search', path: '/search', component: () => import('pages/SearchPage.vue') },
      { name: 'library', path: '/library', component: () => import('pages/LibraryPage.vue') },
      { name: 'premium', path: '/premium', component: () => import('pages/PremiumPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
