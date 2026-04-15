<template>
  <main class="skills-page">
    <div class="page-hero container">
      <p class="section-label">03. Skills</p>
      <h1 class="section-title">Tools of the<br><span class="gradient-text">Trade</span></h1>
      <p class="page-subtitle">A curated stack of technologies, platforms, and frameworks I work with daily.</p>
    </div>

    <section class="skills-section container">
      <div class="skill-category reveal" v-for="(cat, ci) in categories" :key="cat.title" :style="`transition-delay: ${ci * 0.1}s`">
        <div class="cat-header">
          <div class="cat-icon" v-html="cat.icon"></div>
          <div>
            <h2>{{ cat.title }}</h2>
            <p>{{ cat.desc }}</p>
          </div>
        </div>
        <div class="skills-list">
          <div
            class="skill-pill"
            v-for="(skill, si) in cat.skills"
            :key="skill.name"
            :style="`animation-delay: ${si * 0.05}s`"
          >
            <span class="pill-dot" :style="`background: ${skill.color || 'var(--accent)'}`"></span>
            {{ skill.name }}
            <span class="pill-level">{{ skill.level }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Proficiency bars -->
    <section class="proficiency container">
      <p class="section-label">Proficiency</p>
      <h2 class="section-title" style="font-size: 1.8rem;">Core Skill Levels</h2>
      <div class="bars">
        <div class="bar-item reveal" v-for="(b, i) in bars" :key="b.name" :style="`transition-delay: ${i * 0.08}s`">
          <div class="bar-meta">
            <span>{{ b.name }}</span>
            <span class="bar-pct">{{ b.pct }}%</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" :style="`width: ${inView ? b.pct : 0}%; background: ${b.color || 'var(--accent)'}`"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inView = ref(false)

const categories = [
  {
    title: 'CMS & Platforms',
    desc: 'Building and managing web experiences',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'WordPress', level: 'Expert', color: '#3c82f6' },
      { name: 'Shopify', level: 'Advanced', color: '#95bf47' },
      { name: 'Elementor', level: 'Expert', color: '#a855f7' },
      { name: 'Hostinger', level: 'Advanced', color: '#6366f1' },
    ]
  },
  {
    title: 'Automation Tools',
    desc: 'Orchestrating intelligent workflows',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    skills: [
      { name: 'n8n', level: 'Expert', color: '#ea4b71' },
      { name: 'Zapier', level: 'Advanced', color: '#ff4a00' },
      { name: 'Make (Integromat)', level: 'Advanced', color: '#6d00fa' },
      { name: 'ChatGPT API', level: 'Advanced', color: '#10a37f' },
      { name: 'Gemini', level: 'Proficient', color: '#4285f4' },
    ]
  },
  {
    title: 'AI & No-Code',
    desc: 'Leveraging intelligence without heavy code',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
    skills: [
      { name: 'OpenAI', level: 'Advanced', color: '#10a37f' },
      { name: 'Gemini AI', level: 'Proficient', color: '#4285f4' },
      { name: 'Notion AI', level: 'Advanced', color: '#f8f8f2' },
    ]
  },
  {
    title: 'Frontend / Tech',
    desc: 'Code-level web fundamentals',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: [
      { name: 'HTML', level: 'Expert', color: '#e34c26' },
      { name: 'CSS', level: 'Advanced', color: '#264de4' },
      { name: 'JSON', level: 'Advanced', color: '#f0db4f' },
      { name: 'XML', level: 'Proficient', color: '#06b6d4' },
    ]
  },
  {
    title: 'SEO & Marketing',
    desc: 'Driving organic growth and visibility',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    skills: [
      { name: 'On-Page SEO', level: 'Expert', color: '#a855f7' },
      { name: 'Ahrefs', level: 'Advanced', color: '#f59e0b' },
      { name: 'Google Analytics', level: 'Advanced', color: '#e37400' },
    ]
  },
  {
    title: 'Productivity Tools',
    desc: 'Staying organized and efficient',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    skills: [
      { name: 'Notion', level: 'Expert', color: '#f8f8f2' },
      { name: 'Canva', level: 'Advanced', color: '#00c4cc' },
      { name: 'Trello', level: 'Advanced', color: '#0079bf' },
      { name: 'Google Sheets', level: 'Advanced', color: '#34a853' },
    ]
  },
]

const bars = [
  { name: 'WordPress & CMS',    pct: 92, color: '#3c82f6' },
  { name: 'n8n Automation',     pct: 88, color: '#ea4b71' },
  { name: 'AI Tool Integration',pct: 85, color: '#a855f7' },
  { name: 'On-Page SEO',        pct: 90, color: '#f59e0b' },
  { name: 'HTML / CSS',         pct: 80, color: '#06b6d4' },
  { name: 'Zapier / Make',      pct: 82, color: '#ff4a00' },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        if (e.target.closest('.proficiency')) inView.value = true
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

  // Trigger bars when proficiency section enters view
  const profSection = document.querySelector('.proficiency')
  if (profSection) {
    const bObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { inView.value = true; bObs.disconnect() }
    }, { threshold: 0.3 })
    bObs.observe(profSection)
  }
})
</script>

<style scoped>
.skills-page { padding-top: 120px; padding-bottom: 80px; }
.page-hero { margin-bottom: 60px; }
.page-subtitle { color: var(--text-secondary); font-size: 1rem; max-width: 520px; margin-top: 12px; }

.skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: var(--transition);
}
.skill-category:hover { border-color: var(--border); }
.cat-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}
.cat-icon {
  width: 40px; height: 40px;
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}
.cat-header h2 { font-size: 1rem; font-weight: 700; margin-bottom: 3px; }
.cat-header p { color: var(--text-muted); font-size: 0.78rem; }

.skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 0.8rem;
  color: var(--text-primary);
  transition: var(--transition);
  font-family: var(--font-mono);
}
.skill-pill:hover { border-color: var(--border); background: var(--accent-subtle); color: var(--accent); }
.pill-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.pill-level { color: var(--text-muted); font-size: 0.68rem; margin-left: 2px; }

/* Bars */
.proficiency { margin-bottom: 40px; }
.bars { margin-top: 28px; display: flex; flex-direction: column; gap: 18px; }
.bar-item {}
.bar-meta { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem; color: var(--text-secondary); }
.bar-pct { font-family: var(--font-mono); color: var(--accent); }
.bar-track {
  height: 6px;
  background: var(--bg-card);
  border-radius: 100px;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  border-radius: 100px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
