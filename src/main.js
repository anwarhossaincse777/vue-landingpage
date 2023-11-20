
// <!-- Vendor CSS Files -->
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/aos/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// <!-- Template Main CSS File -->
import './assets/css/main.css'

// <!-- Vendor JS Files -->

import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/glightbox/js/glightbox.min.js'
import './assets/vendor/purecounter/purecounter_vanilla.js'
import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
import './assets/vendor/swiper/swiper-bundle.min.js'
// import './assets/vendor/aos/aos.js'

// <!-- Template Main JS File -->
import './assets/js/main.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'


const app = createApp(App)

app.use(createPinia())


app.mount('#app')
