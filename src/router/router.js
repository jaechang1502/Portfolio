import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/introHome.vue'
import Skill from '../components/skillComponent.vue'

const routes = [
    {
      path: "/",
      component: Home,
      name: "#Home"
    },
    {
      path:'/#Skill',
      component: Skill,
      name: "/#Skill"  
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 