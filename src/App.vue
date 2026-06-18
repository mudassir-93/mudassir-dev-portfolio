<template>
  <div>
    <!-- Custom Cursor -->
    <div class="cursor" ref="cursor"></div>
    <div class="cursor-follower" ref="follower"></div>

    <!-- Nav -->
    <NavBar />

    <!-- Page -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <FooterBar />
    
    <!-- Vercel Analytics -->
    <Analytics />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const cursor   = ref(null)
const follower = ref(null)

onMounted(() => {
  let mouseX = 0, mouseY = 0
  let followerX = 0, followerY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.value.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
  })

  const animate = () => {
    followerX += (mouseX - followerX) * 0.12
    followerY += (mouseY - followerY) * 0.12
    follower.value.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`
    requestAnimationFrame(animate)
  }
  animate()

  document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.value.style.transform += ' scale(2)'
      follower.value.style.width = '48px'
      follower.value.style.height = '48px'
      follower.value.style.opacity = '0.8'
    })
    el.addEventListener('mouseleave', () => {
      follower.value.style.width = '32px'
      follower.value.style.height = '32px'
      follower.value.style.opacity = '0.5'
    })
  })

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
