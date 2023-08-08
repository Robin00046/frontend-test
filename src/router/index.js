import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue')
    // }
    // ,
    {
      path: '/',
      name: 'food',
      component: () => import('../views/FoodView.vue'),
    },
    {
      path: '/create-food',
      name: 'create-food',
      component: () => import('../views/CreateFood.vue'),
    },
    {
      path: '/transaksi',
      name: 'transaksi',
      component: () => import('../components/HelloWorld.vue'),
    },
  ],
});

export default router;
