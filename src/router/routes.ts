import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        meta: { group: 'home' },
        path: '/',
        component: () => import('pages/HomePage.vue'),
        children: [
          { name: 'single', path: '/single/:id', component: () => import('pages/PremiumPage.vue') }
        ]
      },
      {
        name: 'search',
        meta: { group: 'search' },
        path: '/search',
        component: () => import('pages/SearchPage.vue')
      },
      {
        name: 'library',
        meta: { group: 'library' },
        path: '/library',
        component: () => import('pages/LibraryPage.vue')
      },
      {
        name: 'premium',
        meta: { group: 'premium' },

        path: '/premium',
        component: () => import('pages/PremiumPage.vue')
      }
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
