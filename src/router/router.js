import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/introHome.vue'
import AboutMe from '../components/AboutMe.vue'

const routes = [
    {
      path: "/",
      component: Home,
      name: "#Home"
    },
    {
      path:'/#AboutMe',
      component: AboutMe,
      name: "/#AboutMe"  
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 