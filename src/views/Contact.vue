<template>
  <main class="contact-page">
    <div class="page-hero container">
      <p class="section-label">06. Contact</p>
      <h1 class="section-title">Let's Build<br><span class="gradient-text">Something Great</span></h1>
      <p class="page-subtitle">Have a project, question, or just want to say hi? I'd love to hear from you.</p>
    </div>

    <section class="contact-layout container">
      <!-- Left info -->
      <div class="contact-info reveal">
        <h2>Get In Touch</h2>
        <p>I'm currently open to freelance projects, full-time opportunities, and exciting collaborations. Whether you need a website, an automation system, or AI integration — let's talk.</p>

        <div class="contact-methods">
          <a :href="`mailto:${email}`" class="contact-method">
            <div class="cm-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <span class="cm-label">Email</span>
              <span class="cm-val">{{ email }}</span>
            </div>
          </a>
          <a href="tel:+923232013814" class="contact-method">
            <div class="cm-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <span class="cm-label">Phone</span>
              <span class="cm-val">0323-2013814</span>
            </div>
          </a>
          <a href="https://linkedin.com/in/mudassirmazhar-892430324" target="_blank" rel="noopener" class="contact-method">
            <div class="cm-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div>
              <span class="cm-label">LinkedIn</span>
              <span class="cm-val">mudassirmazhar</span>
            </div>
          </a>
          <div class="contact-method no-link">
            <div class="cm-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <span class="cm-label">Location</span>
              <span class="cm-val">Korangi, Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div class="availability">
          <span class="avail-dot"></span>
          <span>Currently available for new projects</span>
        </div>
      </div>

      <!-- Right form -->
      <div class="contact-form-wrap reveal">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label>Your Name</label>
              <input v-model="form.name" type="text" placeholder="John Doe" required />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input v-model="form.email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div class="form-group">
            <label>Subject</label>
            <input v-model="form.subject" type="text" placeholder="Project Inquiry, Collaboration..." />
          </div>
          <div class="form-group">
            <label>What do you need?</label>
            <div class="service-pills">
              <button
                type="button"
                v-for="s in services"
                :key="s"
                :class="['s-pill', { active: form.service === s }]"
                @click="form.service = s"
              >{{ s }}</button>
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea v-model="form.message" placeholder="Tell me about your project..." rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="submitted">
            <span v-if="!submitted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </span>
            <span v-else>✓ Message Sent!</span>
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const email = 'mudassirmazhar07@gmail.com'
const submitted = ref(false)
const services = ['Web Development', 'Automation', 'AI Integration', 'SEO', 'Consultation']

const form = ref({ name: '', email: '', subject: '', service: '', message: '' })

const handleSubmit = () => {
  const { name, subject, message, service } = form.value
  const body = `Name: ${name}\nService: ${service}\n\n${message}`
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`
  submitted.value = true
  setTimeout(() => submitted.value = false, 3000)
}

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.contact-page { padding-top: 120px; padding-bottom: 80px; }
.page-hero { margin-bottom: 60px; }
.page-subtitle { color: var(--text-secondary); font-size: 1rem; max-width: 480px; margin-top: 12px; }

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  align-items: start;
}

/* Info */
.contact-info h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 14px; }
.contact-info > p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-bottom: 32px; }

.contact-methods { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
.contact-method {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  transition: var(--transition);
  color: var(--text-primary);
}
.contact-method:not(.no-link):hover { border-color: var(--border); transform: translateX(4px); }
.cm-icon {
  width: 40px; height: 40px;
  background: var(--accent-subtle);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}
.cm-label { font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); display: block; }
.cm-val { font-size: 0.85rem; color: var(--text-primary); }

.availability {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.8rem;
  color: #22c55e;
  font-family: var(--font-mono);
}
.avail-dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 6px #22c55e; }

/* Form */
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 36px;
}
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
label { font-size: 0.78rem; color: var(--text-secondary); font-family: var(--font-mono); }
input, textarea {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 12px 14px;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 0.88rem;
  transition: var(--transition);
  outline: none;
  resize: none;
}
input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-subtle); }
input::placeholder, textarea::placeholder { color: var(--text-muted); }

.service-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.s-pill {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 0.78rem;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: var(--transition);
}
.s-pill:hover, .s-pill.active {
  background: var(--accent-subtle);
  border-color: var(--accent);
  color: var(--accent);
}

.submit-btn { width: 100%; justify-content: center; padding: 14px; }
.submit-btn:disabled { opacity: 0.7; cursor: default; }

@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
