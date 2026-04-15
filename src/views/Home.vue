<template>
  <main class="home">
    <!-- Animated grid bg -->
    <div class="grid-bg" aria-hidden="true">
      <div class="grid-lines"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="scanline"></div>
    </div>

    <!-- Hero -->
    <section class="hero container">
      <div class="hero-content">
        <p class="greeting fade-up" style="animation-delay:0.1s">
          <span class="dot"></span> Available for work
        </p>
        <h1 class="hero-name fade-up" style="animation-delay:0.2s">
          Mudassir<br><span class="gradient-text">Mazhar</span>
        </h1>
        <p class="hero-role fade-up" style="animation-delay:0.3s">
          <span class="typed-wrapper">
            <span class="typed-text">{{ typedText }}</span><span class="caret">|</span>
          </span>
        </p>
        <p class="hero-bio fade-up" style="animation-delay:0.4s">
          Versatile Web Developer & Automation Specialist crafting high-performing websites,
          AI-powered workflows, and seamless digital solutions from Karachi, Pakistan.
        </p>
        <div class="hero-actions fade-up" style="animation-delay:0.5s">
          <router-link to="/projects" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            View Projects
          </router-link>
          <router-link to="/contact" class="btn btn-outline">Get in Touch</router-link>
        </div>
        <div class="hero-stats fade-up" style="animation-delay:0.6s">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual fade-in" style="animation-delay:0.3s">
        <div class="avatar-ring">
          <div class="avatar-inner">
            <div class="avatar-initials">MM</div>
          </div>
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <svg class="ring-orbit" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(168,85,247,0.15)" stroke-dasharray="4 6"/>
          </svg>
          <!-- Floating tech badges -->
          <div class="badge b1">n8n</div>
          <div class="badge b2">AI</div>
          <div class="badge b3">WP</div>
          <div class="badge b4">SEO</div>
        </div>
      </div>
    </section>

    <!-- Scrolling marquee -->
    <div class="marquee-strip" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="item in marqueeItems" :key="item">{{ item }} <em>·</em> </span>
        <span v-for="item in marqueeItems" :key="item + '_2'">{{ item }} <em>·</em> </span>
      </div>
    </div>

    <!-- Quick highlights -->
    <section class="highlights container">
      <div class="highlight-card reveal" v-for="(h, i) in highlights" :key="h.title" :style="`transition-delay: ${i * 0.1}s`">
        <div class="h-icon">
          <span v-html="h.icon"></span>
        </div>
        <h3>{{ h.title }}</h3>
        <p>{{ h.desc }}</p>
        <router-link :to="h.link" class="h-link">
          Explore →
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const roles = ['Web Developer', 'Automation Specialist', 'AI Workflow Integrator', 'CMS Expert', 'Digital Solutions Consultant']
const typedText = ref('')
let roleIndex = 0, charIndex = 0, deleting = false

const type = () => {
  const current = roles[roleIndex]
  if (!deleting) {
    typedText.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1800); return }
  } else {
    typedText.value = current.slice(0, --charIndex)
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length }
  }
  setTimeout(type, deleting ? 50 : 80)
}

const stats = [
  { num: '10+', label: 'Websites Built' },
  { num: '3+', label: 'Chatbots Built' },
  { num: '2+', label: 'Years Experience' },
]

const highlights = [
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: 'Web Development',
    desc: 'CMS-powered sites, Shopify stores, and performance-optimized frontends that convert.',
    link: '/projects'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    title: 'AI & Automation',
    desc: 'n8n workflows, Zapier pipelines, and ChatGPT integrations that save time and scale operations.',
    link: '/skills'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
    title: 'SEO & Growth',
    desc: 'On-page SEO, Ahrefs analytics, and Google Analytics setups that drive organic traffic.',
    link: '/experience'
  },
]

const marqueeItems = ['WordPress', 'Elementor', 'n8n', 'Zapier', 'ChatGPT API', 'Gemini', 'Ahrefs', 'Google Analytics', 'Notion AI', 'Shopify', 'Make.com']

onMounted(() => {
  setTimeout(type, 400)

  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.home { min-height: 100vh; padding-top: 80px; overflow: hidden; position: relative; }

/* Grid BG */
.grid-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
.grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}
.orb { position: absolute; border-radius: 50%; filter: blur(80px); }
.orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%); top: -100px; right: -100px; animation: float 8s ease-in-out infinite; }
.orb-2 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%); bottom: 100px; left: -50px; animation: float 10s ease-in-out infinite reverse; }
.scanline {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent);
  animation: scanline 6s linear infinite;
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
}
.hero-content { flex: 1; max-width: 580px; }
.greeting {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}
.dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px #22c55e; animation: pulse-glow 2s ease infinite; }
.hero-name {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}
.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--text-secondary);
  margin-bottom: 24px;
  min-height: 1.6em;
}
.typed-text { color: var(--accent-2); }
.caret { color: var(--accent); animation: blink 0.9s step-end infinite; }
.hero-bio { color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 36px; max-width: 500px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
.hero-stats { display: flex; gap: 32px; }
.stat { display: flex; flex-direction: column; }
.stat-num { font-size: 1.8rem; font-weight: 800; color: var(--accent); line-height: 1; }
.stat-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; font-family: var(--font-mono); }

/* Avatar */
.hero-visual { flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.avatar-ring {
  position: relative;
  width: 280px; height: 280px;
  display: flex; align-items: center; justify-content: center;
}
.avatar-inner {
  width: 160px; height: 160px;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-card-hover));
  border: 2px solid var(--border);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  position: relative;
  z-index: 2;
  animation: pulse-glow 3s ease infinite;
}
.avatar-initials {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--font-mono);
}
.ring {
  position: absolute; border-radius: 50%; border: 1px solid;
  animation: spin-slow linear infinite;
}
.ring-1 { width: 210px; height: 210px; border-color: rgba(168,85,247,0.2); animation-duration: 12s; }
.ring-2 { width: 260px; height: 260px; border-color: rgba(6,182,212,0.12); animation-duration: 20s; animation-direction: reverse; }
.ring-orbit { position: absolute; width: 100%; height: 100%; }

.badge {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  white-space: nowrap;
  animation: float ease-in-out infinite;
  backdrop-filter: blur(10px);
}
.b1 { top: 10px; right: -10px; animation-duration: 5s; }
.b2 { bottom: 30px; right: -20px; animation-duration: 6s; animation-delay: 1s; }
.b3 { bottom: 10px; left: -10px; animation-duration: 5.5s; animation-delay: 0.5s; }
.b4 { top: 30px; left: -20px; animation-duration: 7s; animation-delay: 1.5s; }

/* Marquee */
.marquee-strip {
  overflow: hidden;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 14px 0;
  background: rgba(168,85,247,0.03);
  position: relative; z-index: 1;
}
.marquee-track {
  display: inline-flex;
  gap: 0;
  animation: marquee 25s linear infinite;
  white-space: nowrap;
}
.marquee-track span {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  padding: 0 16px;
}
.marquee-track em { color: var(--accent); font-style: normal; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Highlights */
.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 80px 24px 40px;
  position: relative; z-index: 1;
}
.highlight-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.highlight-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.highlight-card:hover { border-color: var(--border); transform: translateY(-4px); box-shadow: var(--shadow-card); }
.highlight-card:hover::before { opacity: 1; }
.h-icon {
  width: 44px; height: 44px;
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  color: var(--accent);
}
.highlight-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
.highlight-card p { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.65; margin-bottom: 18px; }
.h-link { font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); transition: var(--transition); }
.h-link:hover { letter-spacing: 0.05em; }

@media (max-width: 900px) {
  .hero { flex-direction: column; text-align: center; padding-top: 60px; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-bio { margin: 0 auto 36px; }
  .hero-visual { order: -1; }
  .avatar-ring { width: 220px; height: 220px; }
  .avatar-inner { width: 130px; height: 130px; }
  .ring-1 { width: 170px; height: 170px; }
  .ring-2 { width: 210px; height: 210px; }
}
</style>
