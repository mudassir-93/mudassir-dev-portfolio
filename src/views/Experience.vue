<template>
  <main class="experience-page">
    <div class="page-hero container">
      <p class="section-label">05. Experience</p>
      <h1 class="section-title">Journey &<br><span class="gradient-text">Milestones</span></h1>
      <p class="page-subtitle">My professional path, roles, and the impact I've delivered along the way.</p>
    </div>

    <!-- Timeline -->
    <section class="timeline-section container">
      <div class="timeline">
        <div
          class="timeline-item reveal"
          v-for="(item, i) in timeline"
          :key="item.title"
          :style="`transition-delay: ${i * 0.15}s`"
        >
          <div class="tl-connector">
            <div class="tl-dot" :class="{ current: item.current }"></div>
            <div class="tl-line" v-if="i < timeline.length - 1"></div>
          </div>
          <div class="tl-card" :class="{ current: item.current }">
            <div class="tl-card-header">
              <div>
                <span class="tl-badge" v-if="item.current">● Current</span>
                <h3>{{ item.title }}</h3>
                <p class="tl-company">{{ item.company }}</p>
              </div>
              <div class="tl-period">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {{ item.period }}
              </div>
            </div>
            <p class="tl-desc">{{ item.desc }}</p>
            <div class="tl-highlights">
              <div class="tl-hl" v-for="hl in item.highlights" :key="hl">
                <span class="hl-check">✓</span>{{ hl }}
              </div>
            </div>
            <div class="tl-tech">
              <span v-for="t in item.tech" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="education-section container">
      <p class="section-label">Education</p>
      <h2 class="section-title" style="font-size: 2rem;">Academic<br><span class="gradient-text">Background</span></h2>
      <div class="edu-grid">
        <div class="edu-card reveal" v-for="(e, i) in education" :key="e.degree" :style="`transition-delay: ${i * 0.1}s`">
          <div class="edu-icon" v-html="e.icon"></div>
          <div>
            <h3>{{ e.degree }}</h3>
            <p class="edu-school">{{ e.school }}</p>
            <p class="edu-year">{{ e.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements strip -->
    <section class="achievements-strip container">
      <p class="section-label">Key Achievements</p>
      <div class="ach-grid">
        <div class="ach-card reveal" v-for="(a, i) in achievements" :key="a.num" :style="`transition-delay: ${i * 0.1}s`">
          <div class="ach-num">{{ a.num }}</div>
          <div class="ach-label">{{ a.label }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

const timeline = [
  {
    title: 'Founder & Automation Lead',
    company: 'SEO Works',
    period: 'Sep 2024 – Present',
    current: true,
    desc: 'Founded and currently leading SEO Works — a digital agency focused on automation-driven SEO and web solutions. Responsible for strategy, operations, client management, and technical delivery.',
    highlights: [
      'Built the agency\'s full digital infrastructure from scratch',
      'Designed automation systems that cut client workflow time significantly',
      'Led multi-channel SEO campaigns with measurable organic traffic growth',
      'Managed client onboarding, reporting, and retention',
    ],
    tech: ['n8n', 'WordPress', 'Ahrefs', 'Google Analytics', 'Zapier', 'Notion AI'],
  },
  {
    title: 'WordPress Developer',
    company: 'Envazia',
    period: 'Jun 2024 – Present',
    current: true,
    desc: 'Working as a WordPress Developer at Envazia, building and maintaining high-quality web projects. Responsible for design implementation, plugin integration, performance optimization, and SEO.',
    highlights: [
      'Developed and delivered production-ready WordPress sites',
      'Integrated third-party APIs, plugins, and automation tools',
      'Improved site speed and core web vitals across multiple projects',
      'Collaborated with design and content teams to execute client briefs',
    ],
    tech: ['WordPress', 'Elementor', 'PHP', 'HTML', 'CSS', 'SEO'],
  },
]

const education = [
  {
    degree: 'Intermediate – Pre-Engineering',
    school: 'Aisha Bawany Govt. College, Karachi',
    year: '2023 – 2025',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  },
  {
    degree: 'Matric – Computer Science',
    school: 'DHACSS Phase 7, Karachi',
    year: '2021 – 2023',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  },
]

const achievements = [
  { num: '10+', label: 'Websites Developed' },
  { num: '3+', label: 'Chatbots Deployed' },
  { num: '2+', label: 'Years Experience' },
  { num: '100%', label: 'Client Satisfaction' },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.experience-page { padding-top: 120px; padding-bottom: 80px; }
.page-hero { margin-bottom: 60px; }
.page-subtitle { color: var(--text-secondary); font-size: 1rem; max-width: 520px; margin-top: 12px; }

/* Timeline */
.timeline-section { margin-bottom: 80px; }
.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline-item { display: flex; gap: 24px; }

.tl-connector { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; padding-top: 8px; }
.tl-dot {
  width: 14px; height: 14px;
  border: 2px solid var(--text-muted);
  border-radius: 50%;
  background: var(--bg-primary);
  flex-shrink: 0;
  transition: var(--transition);
}
.tl-dot.current { border-color: var(--accent); background: var(--accent); box-shadow: 0 0 16px var(--accent-glow); }
.tl-line { width: 2px; flex: 1; background: var(--border-subtle); margin: 6px 0; min-height: 40px; }

.tl-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 24px;
  flex: 1;
  transition: var(--transition);
}
.tl-card:hover { border-color: var(--border); }
.tl-card.current { border-color: var(--border); }
.tl-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; gap: 16px; }
.tl-badge { font-family: var(--font-mono); font-size: 0.68rem; color: #22c55e; display: block; margin-bottom: 4px; }
.tl-card h3 { font-size: 1.1rem; font-weight: 700; }
.tl-company { color: var(--accent); font-size: 0.85rem; margin-top: 3px; font-weight: 600; }
.tl-period {
  display: flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-size: 0.72rem;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}
.tl-desc { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.7; margin-bottom: 18px; }
.tl-highlights { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
.tl-hl { display: flex; align-items: flex-start; gap: 10px; font-size: 0.84rem; color: var(--text-secondary); }
.hl-check { color: var(--accent); font-size: 0.75rem; flex-shrink: 0; margin-top: 1px; }
.tl-tech { display: flex; flex-wrap: wrap; gap: 6px; }
.tl-tech span {
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 4px 10px;
  border-radius: 6px;
}

/* Education */
.education-section { margin-bottom: 80px; }
.edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 28px; }
.edu-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: var(--transition);
}
.edu-card:hover { border-color: var(--border); transform: translateY(-3px); }
.edu-icon {
  width: 44px; height: 44px;
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}
.edu-card h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
.edu-school { color: var(--text-secondary); font-size: 0.82rem; margin-bottom: 3px; }
.edu-year { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); }

/* Achievements */
.achievements-strip {}
.ach-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-top: 28px; }
.ach-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}
.ach-card:hover { border-color: var(--border); transform: translateY(-3px); }
.ach-num { font-size: 2.4rem; font-weight: 900; background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; margin-bottom: 8px; }
.ach-label { color: var(--text-secondary); font-size: 0.82rem; font-family: var(--font-mono); }

@media (max-width: 600px) {
  .tl-card-header { flex-direction: column; }
}
</style>
