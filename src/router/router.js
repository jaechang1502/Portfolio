import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/introHome.vue'

const routes = [
    {
      path: "/#",
      component: Home,
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 