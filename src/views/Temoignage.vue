<template>
  <div class="index-page">
    <Header />
    
    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/portfolio/image du pasteur/WhatsApp Image 2025-12-28 at 21.55.56.jpeg" alt="" data-aos="fade-in">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>En mémoire de Pasteur Muanza Polecha Matunga Zebedee</h2>
          <p><span class="typed" data-typed-items="Serviteur fidèle de Dieu, Pasteur de l'Église FEPACO NZAMBE MALAMU, Père aimant, Berger attentif, Toujours dans nos cœurs"></span></p>
        </div>
      </section>

      <!-- About Section -->
      <br><br><br>
      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <!-- Les témoignages seront ajoutés ici -->
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>En mémoire de Pasteur Muanza Polecha Matunga Zebedee</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-5">
              <div class="col-lg-6">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/243842691517" target="_blank" style="color:green;">+243 842 691 517</a></p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:imdigitallabs@gmail.com" style="color:green;">imdigitallabs@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <p>Pour toute question ou souvenir à propos du Pasteur Muanza Polecha, n'hésitez pas à nous contacter. Merci de contribuer à sa mémoire.</p>
          </div>
        </div>
      </section>

      <!-- Credits Section -->
      <section id="credits" class="credits section">
        <div class="container section-title">
          <h2 class="credits-title">Conception</h2>
          <p class="credits-subtitle">Ce site a été créé avec amour et soin pour honorer la mémoire de Pasteur Muanza Polecha Matunga Zebedee.</p>
        </div>

        <div class="container">
          <div class="text-center credits-content">
            <p class="credits-text">Conception et développement par <strong class="credits-brand">IM DIGITAL LABS</strong>.</p>
            <p class="credits-text">
              <strong class="credits-label">Contact direct :</strong><br>
              <a href="https://wa.me/243842691517" target="_blank" class="credits-link whatsapp-link">WhatsApp: +243 842 691 517</a><br>
              <a href="mailto:imdigitallabs@gmail.com" class="credits-link email-link">Email: imdigitallabs@gmail.com</a>
            </p>
            <p class="credits-text">Nous espérons que ce site continuera à célébrer la vie et l'héritage du Pasteur Muanza Polecha, tout en permettant à ses proches de se souvenir de lui avec tendresse.</p>
            <p class="credits-text">Merci pour votre visite.</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center" @click.prevent="scrollToTop"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Preloader -->
    <div id="preloader"></div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Temoignage',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.initScripts()
    this.initScrolled()
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async initScripts() {
      // Load vendor scripts first
      const scripts = [
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/aos/aos.js',
        '/assets/vendor/typed.js/typed.umd.js'
      ]

      try {
        await Promise.all(scripts.map(script => this.loadScript(script)))
        
        // Wait a bit for scripts to be fully available
        setTimeout(() => {
          this.initAOS()
          this.initTyped()
          this.initScrollTop()
          this.initPreloader()
        }, 100)
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    },
    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    },
    initAOS() {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      }
    },
    initTyped() {
      const selectTyped = document.querySelector('.typed')
      if (selectTyped && window.Typed) {
        const typed_strings = selectTyped.getAttribute('data-typed-items').split(',')
        new window.Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        })
      }
    },
    initScrollTop() {
      const scrollTop = document.querySelector('.scroll-top')
      if (scrollTop) {
        const toggleScrollTop = () => {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active')
        }
        window.addEventListener('load', toggleScrollTop)
        window.addEventListener('scroll', toggleScrollTop)
      }
    },
    initPreloader() {
      const preloader = document.querySelector('#preloader')
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove()
        })
        // Remove preloader if already loaded
        if (document.readyState === 'complete') {
          preloader.remove()
        }
      }
    },
    initScrolled() {
      const selectBody = document.querySelector('body')
      const selectHeader = document.querySelector('#header')
      if (!selectHeader) return
      
      const toggleScrolled = () => {
        if (!selectHeader.classList.contains('scroll-up-sticky') && 
            !selectHeader.classList.contains('sticky-top') && 
            !selectHeader.classList.contains('fixed-top')) return
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled')
      }
      
      window.addEventListener('scroll', toggleScrolled)
      toggleScrolled()
    }
  }
}
</script>

<style scoped>
/* Styles pour la section Credits - Visibilité selon le thème */
#credits {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

.credits-title {
  color: var(--heading-color) !important;
}

.credits-subtitle {
  color: var(--default-color) !important;
}

.credits-content {
  color: var(--default-color);
}

.credits-content p,
.credits-text {
  color: var(--default-color) !important;
  margin-bottom: 15px;
  line-height: 1.8;
}

.credits-brand {
  color: var(--accent-color) !important;
  font-weight: 700;
}

.credits-label {
  color: var(--heading-color) !important;
  font-weight: 600;
}

.credits-link {
  color: var(--accent-color) !important;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.credits-link:hover {
  color: color-mix(in srgb, var(--accent-color), black 15%) !important;
  text-decoration: underline;
}

.whatsapp-link {
  color: #25D366 !important;
}

.whatsapp-link:hover {
  color: #20ba5a !important;
}

.email-link {
  color: var(--accent-color) !important;
}
</style>

