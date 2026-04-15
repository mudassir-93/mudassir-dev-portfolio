<template>
  <main class="projects-page">
    <div class="page-hero container">
      <p class="section-label">04. Projects</p>
      <h1 class="section-title">Work That<br><span class="gradient-text">Delivers</span></h1>
      <p class="page-subtitle">Selected projects showcasing my expertise in web development, automation, and AI integration.</p>
    </div>

    <!-- Filter -->
    <div class="filter-bar container">
      <button
        v-for="f in filters"
        :key="f"
        :class="['filter-btn', { active: activeFilter === f }]"
        @click="activeFilter = f"
      >{{ f }}</button>
    </div>

    <!-- Projects Grid -->
    <section class="projects-grid container">
      <div
        class="project-card reveal"
        v-for="(p, i) in filteredProjects"
        :key="p.title"
        :style="`transition-delay: ${i * 0.1}s`"
      >
        <div class="project-header">
          <div class="project-icon" v-html="p.icon"></div>
          <div class="project-links">
            <span class="project-tag" v-for="tag in p.tags.slice(0,2)" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <h3 class="project-title">{{ p.title }}</h3>
        <p class="project-desc">{{ p.desc }}</p>
        <div class="project-tech">
          <span v-for="t in p.tech" :key="t">{{ t }}</span>
        </div>
        <div class="project-footer">
          <div class="project-outcome">
            <span class="outcome-icon">▲</span>
            {{ p.outcome }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="projects-cta container reveal">
      <p>Have a project in mind?</p>
      <h2>Let's build something <span class="gradient-text">amazing together.</span></h2>
      <router-link to="/contact" class="btn btn-primary">Start a Project →</router-link>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('All')
const filters = ['All', 'Web Dev', 'Automation', 'AI', 'SEO']

const projects = [
  {
    title: 'Multi-Industry Website Portfolio',
    desc: 'Developed 10+ dynamic, high-performing websites across industries including e-commerce, services, and corporate. Each site optimized for speed, SEO, and conversion.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    tech: ['WordPress', 'Elementor', 'Shopify', 'Hostinger'],
    tags: ['Web Dev', 'SEO'],
    category: ['Web Dev', 'SEO'],
    outcome: 'Avg. 40% performance improvement',
  },
  {
    title: 'AI Content & Lead Automation System',
    desc: 'Designed and deployed end-to-end automation pipelines for content generation and lead management using n8n, ChatGPT API, and Zapier. Reduced manual effort by over 70%.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    tech: ['n8n', 'ChatGPT API', 'Zapier', 'Google Sheets'],
    tags: ['Automation', 'AI'],
    category: ['Automation', 'AI'],
    outcome: '70%+ reduction in manual tasks',
  },
  {
    title: 'E-Commerce Chatbot (Gemini + n8n)',
    desc: 'Built a fully automated chatbot system for an e-commerce client using Gemini AI and n8n. Handles product queries, order updates, and customer support 24/7.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    tech: ['Gemini', 'n8n', 'Webhooks', 'JSON'],
    tags: ['AI', 'Automation'],
    category: ['AI', 'Automation'],
    outcome: '24/7 automated customer support',
  },
  {
    title: 'SEO Works – Agency Digital Infrastructure',
    desc: 'Built the complete digital backbone for SEO Works — from the company website to internal workflow automations, client reporting pipelines, and lead generation systems.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    tech: ['WordPress', 'Ahrefs', 'Google Analytics', 'n8n'],
    tags: ['SEO', 'Web Dev'],
    category: ['SEO', 'Web Dev'],
    outcome: 'Full agency operational system',
  },
  {
    title: 'Internal Workflow Restructuring',
    desc: 'Analyzed, restructured, and automated internal business processes for multiple clients using Make (Integromat) and Notion AI. Delivered measurable time savings.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
    tech: ['Make (Integromat)', 'Notion AI', 'Trello', 'Google Sheets'],
    tags: ['Automation'],
    category: ['Automation'],
    outcome: 'Significant time savings per week',
  },
  {
    title: 'Service Chatbot (ChatGPT + n8n)',
    desc: 'Developed an intelligent chatbot for a service business, integrating ChatGPT API with n8n to handle appointment booking, FAQs, and follow-up sequences automatically.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    tech: ['ChatGPT API', 'n8n', 'Webhooks'],
    tags: ['AI', 'Automation'],
    category: ['AI', 'Automation'],
    outcome: 'Automated 60% of customer queries',
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter.value))
)

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.projects-page { padding-top: 120px; padding-bottom: 80px; }
.page-hero { margin-bottom: 40px; }
.page-subtitle { color: var(--text-secondary); font-size: 1rem; max-width: 540px; margin-top: 12px; }

.filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.filter-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 8px 18px;
  border-radius: 100px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  cursor: pointer;
  transition: var(--transition);
}
.filter-btn:hover, .filter-btn.active {
  background: var(--accent-subtle);
  border-color: var(--accent);
  color: var(--accent);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  overflow: hidden;
}
.project-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.project-card:hover { border-color: var(--border); transform: translateY(-5px); box-shadow: var(--shadow-card); }
.project-card:hover::after { transform: scaleX(1); }

.project-header { display: flex; align-items: center; justify-content: space-between; }
.project-icon {
  width: 44px; height: 44px;
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
}
.project-links { display: flex; gap: 6px; }
.project-tag {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.68rem;
  font-family: var(--font-mono);
  padding: 3px 8px;
  border-radius: 100px;
}
.project-title { font-size: 1.05rem; font-weight: 700; line-height: 1.3; }
.project-desc { color: var(--text-secondary); font-size: 0.85rem; line-height: 1.65; flex: 1; }
.project-tech { display: flex; flex-wrap: wrap; gap: 6px; }
.project-tech span {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 4px 10px;
  border-radius: 6px;
}
.project-footer { border-top: 1px solid var(--border-subtle); padding-top: 14px; }
.project-outcome {
  font-size: 0.8rem;
  color: #22c55e;
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  gap: 6px;
}
.outcome-icon { font-size: 0.7rem; }

/* CTA */
.projects-cta {
  text-align: center;
  padding: 60px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}
.projects-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%);
}
.projects-cta p { color: var(--text-muted); font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 10px; }
.projects-cta h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; margin-bottom: 28px; }
</style>
