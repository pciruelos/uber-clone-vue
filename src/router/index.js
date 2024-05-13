import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Directions from '../views/Directions.vue';
import MapView from '../views/MapView.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/directions',
      name: 'Direcitions',
      component: Directions
    },
    {
      path: '/map',
      name: 'Map',
      component: MapView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;