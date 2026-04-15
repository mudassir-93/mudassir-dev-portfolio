<template>
  <main class="about-page">
    <div class="page-hero container">
      <p class="section-label">02. About Me</p>
      <h1 class="section-title">The Human Behind<br><span class="gradient-text">The Code</span></h1>
    </div>

    <section class="about-grid container">
      <!-- Left: Text -->
      <div class="about-text reveal">
        <p>
          Hey! I'm <strong>Mudassir Mazhar</strong>, a versatile Web Developer and Automation Specialist based in
          Karachi, Pakistan. I thrive at the intersection of clean web development and intelligent automation —
          helping businesses do more with less.
        </p>
        <p>
          My work spans building dynamic websites on WordPress and Shopify, integrating AI tools like ChatGPT API
          and Gemini into real-world workflows, and designing no-code automation systems using n8n and Zapier
          that genuinely transform how businesses operate.
        </p>
        <p>
          Currently, I'm the founder of <strong>SEO Works</strong>, where I lead automation and digital strategy,
          while also working as a WordPress Developer at <strong>Envazia</strong>. I'm always looking for
          exciting projects that push boundaries and deliver real impact.
        </p>
        <div class="about-info-grid">
          <div class="info-item" v-for="info in infoItems" :key="info.label">
            <span class="info-label">{{ info.label }}</span>
            <span class="info-val">{{ info.value }}</span>
          </div>
        </div>
        <div class="about-actions">
          <router-link to="/contact" class="btn btn-primary">Let's Work Together</router-link>
          <a href="mailto:mudassirmazhar07@gmail.com" class="btn btn-outline">Download CV</a>
        </div>
      </div>

      <!-- Right: Card stack -->
      <div class="about-visual reveal">
        <div class="profile-card">
          <div class="profile-avatar">
            <span>MM</span>
          </div>
          <h3>Mudassir Mazhar</h3>
          <p class="profile-title">Web Developer & Automation Specialist</p>
          <div class="profile-tags">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="profile-meta">
            <div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Karachi, Pakistan
            </div>
            <div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Available for hire
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div class="achievements">
          <div class="ach-item reveal" v-for="(a, i) in achievements" :key="a" :style="`transition-delay: ${i * 0.1 + 0.3}s`">
            <span class="ach-dot"></span>
            <span>{{ a }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section container">
      <p class="section-label">What I stand for</p>
      <div class="values-grid">
        <div class="value-card reveal" v-for="(v, i) in values" :key="v.title" :style="`transition-delay: ${i * 0.1}s`">
          <div class="v-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

const infoItems = [
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Email', value: 'mudassirmazhar07@gmail.com' },
  { label: 'Phone', value: '0323-2013814' },
  { label: 'Status', value: 'Open to opportunities' },
]

const tags = ['WordPress', 'n8n', 'AI Automation', 'SEO', 'No-Code']

const achievements = [
  'Developed 10+ dynamic websites across industries',
  'Automated content, lead generation & internal workflows using AI',
  'Built chatbot systems with Gemini, ChatGPT & n8n',
  'Improved client outcomes through digital automation',
]

const values = [
  { title: 'Impact First', desc: 'Every solution I build is measured by the real-world results it delivers — not just how it looks.' },
  { title: 'Automation Mindset', desc: 'I believe manual repetition is waste. If a machine can do it better, I\'ll build that machine.' },
  { title: 'Continuous Learning', desc: 'The tech landscape never stops moving. Neither do I. Always exploring the next tool or technique.' },
  { title: 'Client Partnership', desc: 'I don\'t just deliver; I collaborate. Your success is my success — full stop.' },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.about-page { padding-top: 120px; padding-bottom: 80px; }
.page-hero { margin-bottom: 60px; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 80px;
}
.about-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 0.95rem;
}
.about-text strong { color: var(--text-primary); }
.about-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
}
.info-item { display: flex; flex-direction: column; gap: 3px; }
.info-label { font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.1em; }
.info-val { font-size: 0.85rem; color: var(--text-primary); }
.about-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 28px; }

/* Profile Card */
.profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.profile-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
}
.profile-avatar {
  width: 80px; height: 80px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  font-family: var(--font-mono);
}
.profile-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; }
.profile-title { color: var(--text-secondary); font-size: 0.82rem; margin-bottom: 16px; }
.profile-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px; }
.profile-tags span {
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 4px 10px;
  border-radius: 100px;
}
.profile-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  color: var(--text-muted);
  font-size: 0.78rem;
  font-family: var(--font-mono);
}
.profile-meta div { display: flex; align-items: center; gap: 5px; }

/* Achievements */
.achievements { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: 24px; }
.ach-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.85rem;
  color: var(--text-secondary);
}
.ach-item:last-child { border-bottom: none; }
.ach-dot { width: 7px; height: 7px; background: var(--accent); border-radius: 50%; flex-shrink: 0; margin-top: 5px; }

/* Values */
.values-section { padding-bottom: 20px; }
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 24px;
}
.value-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 28px;
  transition: var(--transition);
}
.value-card:hover { border-color: var(--border); transform: translateY(-3px); }
.v-num { font-family: var(--font-mono); font-size: 2rem; font-weight: 700; color: var(--accent-mid); line-height: 1; margin-bottom: 12px; }
.value-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 8px; }
.value-card p { color: var(--text-secondary); font-size: 0.85rem; line-height: 1.65; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-info-grid { grid-template-columns: 1fr; }
}
</style>
