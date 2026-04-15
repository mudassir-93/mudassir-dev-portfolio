import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/',            name: 'Home',       component: Home,       meta: { title: 'Mudassir Mazhar | Home' } },
  { path: '/about',       name: 'About',      component: About,      meta: { title: 'About | Mudassir Mazhar' } },
  { path: '/skills',      name: 'Skills',     component: Skills,     meta: { title: 'Skills | Mudassir Mazhar' } },
  { path: '/projects',    name: 'Projects',   component: Projects,   meta: { title: 'Projects | Mudassir Mazhar' } },
  { path: '/experience',  name: 'Experience', component: Experience, meta: { title: 'Experience | Mudassir Mazhar' } },
  { path: '/contact',     name: 'Contact',    component: Contact,    meta: { title: 'Contact | Mudassir Mazhar' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0, behavior: 'smooth' } }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Mudassir Mazhar'
})

export default router
