<template>
  <nav :class="['navbar', { scrolled: isScrolled, 'menu-open': menuOpen }]">
    <div class="nav-inner container">
      <router-link to="/" class="logo" @click="menuOpen = false">
        <span class="logo-bracket">[</span>MM<span class="logo-bracket">]</span>
      </router-link>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" @click="menuOpen = false" :class="{ active: $route.path === link.to }">
            <span class="link-num">{{ link.num }}</span>{{ link.label }}
          </router-link>
        </li>
      </ul>

      <a href="mailto:mudassirmazhar07@gmail.com" class="btn btn-outline nav-cta">Hire Me</a>

      <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/',           label: 'Home',       num: '01.' },
  { to: '/about',      label: 'About',      num: '02.' },
  { to: '/skills',     label: 'Skills',     num: '03.' },
  { to: '/projects',   label: 'Projects',   num: '04.' },
  { to: '/experience', label: 'Experience', num: '05.' },
  { to: '/contact',    label: 'Contact',    num: '06.' },
]

const onScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s ease;
}
.navbar.scrolled {
  background: rgba(8, 8, 16, 0.9);
  backdrop-filter: blur(20px);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 40px;
}
.logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.05em;
  margin-right: auto;
  transition: var(--transition);
}
.logo:hover { color: var(--accent); }
.logo-bracket { color: var(--accent); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
}
.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding: 8px 14px;
  border-radius: 6px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-links a:hover, .nav-links a.active {
  color: var(--accent);
  background: var(--accent-subtle);
}
.link-num { color: var(--accent); font-size: 0.7rem; }
.nav-cta { font-size: 0.8rem; padding: 9px 20px; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .nav-cta { display: none; }
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    top: 0; right: -100%;
    width: 280px; height: 100vh;
    background: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 40px 24px;
    border-left: 1px solid var(--border);
    transition: right 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  .nav-links.open { right: 0; }
  .nav-links a { font-size: 1rem; padding: 14px 16px; }
}
</style>
