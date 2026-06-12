<template>
  <footer class="site-footer">
    <div class="footer-container">
      
      <div class="footer-column brand-column">
        <h2 class="footer-logo">{{ brandName }}</h2>
      </div>

      <div class="footer-column">
        <h3>Links</h3>
        <ul>
          <li v-for="link in links" :key="link.text">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contacts</h3>
        <ul>
          <li><a :href="`https://wa.me/${contacts.whatsapp.replace(/[^0-9]/g, '')}`">Whatsapp {{ contacts.whatsapp }}</a></li>
          <li><a :href="`mailto:${contacts.email}`">E-mail : {{ contacts.email }}</a></li>
          <li><a :href="`tel:${contacts.phone}`">Tel {{ contacts.phone }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Nous suivre</h3>
        <div class="social-icons">
          <a :href="socials.x" target="_blank" class="social-icon x-icon" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a :href="socials.facebook" target="_blank" class="social-icon facebook-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"></path></svg>
          </a>
          <a :href="socials.instagram" target="_blank" class="social-icon instagram-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
          </a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>{{ currentYear }} &copy; Tous les droits sont reserves</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Données du Footer
const brandName = ref('APP NAME')
const currentYear = ref(new Date().getFullYear())

const links = ref([
  { text: 'Accueil', url: '#' },
  { text: 'Panier', url: '#' }
])

const contacts = ref({
  whatsapp: '+1 222-35-001',
  email: 'xyz@gmail.com',
  phone: '+1 000000000'
})

const socials = ref({
  x: 'https://x.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
})
</script>

<style scoped>
/* Le CSS est scoped pour ne pas impacter le reste du site */
.site-footer {
  background-color: #C4C4C4;
  color: #333;
  padding: 40px 20px 20px 20px;
  font-family: 'Arial', sans-serif;
  border-radius: 20px 20px 0 0;
  max-width: 1200px;
  margin: 40px 20px 0 20px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 30px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.brand-column {
  display: flex;
  align-items: center;
}

.footer-logo {
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}

.footer-column h3 {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.social-icon:hover {
  transform: scale(1.05);
}

.social-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.x-icon {
  background-color: #000000;
}

.facebook-icon {
  background-color: #1877f2;
}

.instagram-icon {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
  color: #666;
}
</style>