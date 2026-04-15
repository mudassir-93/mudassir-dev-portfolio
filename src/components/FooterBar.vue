<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="logo-f"><span class="bracket">[</span>MM<span class="bracket">]</span></span>
        <p>Building digital futures from Karachi, Pakistan.</p>
      </div>
      <div class="footer-links">
        <router-link v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</router-link>
      </div>
      <div class="footer-socials">
        <a href="https://linkedin.com/in/mudassirmazhar-892430324" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:mudassirmazhar07@gmail.com" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Mudassir Mazhar. Crafted with precision.</span>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  background: var(--bg-secondary);
  margin-top: 80px;
  padding: 48px 0 0;
}
.footer-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding-bottom: 40px;
}
.logo-f {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}
.bracket { color: var(--accent); }
.footer-left p { color: var(--text-muted); font-size: 0.85rem; max-width: 220px; }
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links a {
  color: var(--text-secondary);
  font-size: 0.85rem;
  transition: var(--transition);
}
.footer-links a:hover { color: var(--accent); }
.footer-socials {
  display: flex;
  gap: 14px;
  align-items: center;
}
.footer-socials a {
  color: var(--text-muted);
  width: 40px; height: 40px;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.footer-socials a:hover { color: var(--accent); border-color: var(--accent); background: var(--accent-subtle); }
.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 16px 24px;
  text-align: center;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}
</style>
