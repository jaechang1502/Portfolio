import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/homeView.vue'

const routes = [
    {
      path: "/",
      component: Home,
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 