import { createRouter, createWebHistory } from 'vue-router';
import landingpage from '../components/main/landingpage.vue';
import DynamicComponent from '../components/DynamicComponent.vue';

const routes = [
  {
    name: 'Landingpage',
    path: '/',
    component: landingpage,
  },
  {
    name: 'Produk',
    path: '/:slug',
    component: DynamicComponent,
    props: true, 
  },
  {
    name: 'Linkyi',
    path: '/:slug/linkyi',
    component: DynamicComponent,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
