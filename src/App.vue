<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light m-0" style="padding: 0 0 !important; background-color: #1c1f26 !important;">
        <button class="navbar-toggler custom-navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <img class="menu-image" src="images/icons8-menu-50.png" alt="menu-icon" />
          </span>
        </button>
        <div class="collapse navbar-collapse custom-navbar" id="navbarSupportedContent">
          <ul class="navbar-nav me-5 pb-2 mb-lg-0 w-100 d-flex justify-content-center">
            <li class="nav-item">
              <a href="#" @click="scrollToSection('whyUs')" class="nav-link">Причины выбрать нас</a>
            </li>
            <li class="nav-item">
              <a href="#" @click="scrollToSection('services')" class="nav-link">Наши услуги</a>
            </li>
            <li class="nav-item">
              <a href="#" @click="scrollToSection('aboutUs')" class="nav-link">О нас</a>
            </li>
            <li class="nav-item">
              <a href="#" @click="scrollToSection('gallery')" class="nav-link">Примеры работ</a>
            </li>
            <li class="nav-item">
              <a href="#" @click="scrollToSection('contactUs')" class="nav-link">Контакты</a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
  <div id="firstScreen">
    <FirstScreen />
  </div>
  <div
    ref="targetWhyUs"
    :class="{ 'default-animation': true, 'show': whyUsIsVisible }"
    class="show-enter"
    id="whyUs"
  >
    <WhyUsComponent />
  </div>
  <div
    ref="targetServices"
    :class="{ 'default-animation': true, 'show': ServicesIsVisible }"
    class="show-enter"
    id="services"
  >
    <ServicesComponent />
  </div>
  <div
    ref="targetAboutUs"
    :class="{ 'default-animation': true, 'show': AboutUsIsVisible }"
    class="show-enter"
    id="aboutUs"
  >
    <AboutUsComponent />
  </div>
  <div
    ref="targetGallery"
    :class="{ 'default-animation': true, 'show': GalleryIsVisible }"
    class="show-enter"
    id="gallery"
  >
    <GalleryComponent />
  </div>
  <div
    ref="targetContactUs"
    :class="{ 'default-animation': true, 'show': ContactUsIsVisible }"
    class="show-enter"
    id="contactUs"
  >
    <ContactUsComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

import FirstScreen from '@/components/FirstScreen.vue'
import WhyUsComponent from '@/components/WhyUsComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import AboutUsComponent from '@/components/AboutUsComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import ContactUsComponent from '@/components/ContactUsComponent.vue'


const targetWhyUs = ref(null)
const whyUsIsVisible = ref(false)

const targetServices = ref(null)
const ServicesIsVisible = ref(null)

const targetAboutUs = ref(null)
const AboutUsIsVisible = ref(null)

const targetGallery = ref(null)
const GalleryIsVisible = ref(null)

const targetContactUs = ref(null)
const ContactUsIsVisible = ref(null)

let hasEnteredWhyUs = false
let hasEnteredServices = false
let hasEnteredAboutUs = false
let hasEnteredGallery = false
let hasEnteredContactUs = false

const scrollToSection = (sectionId) => {
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// eslint-disable-next-line
const { stop: stopWhyUs } = useIntersectionObserver(
  targetWhyUs,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasEnteredWhyUs) {
      whyUsIsVisible.value = true
      hasEnteredWhyUs = true
    }
  }
)

// eslint-disable-next-line
const { stop: stopServices } = useIntersectionObserver(
  targetServices,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasEnteredServices) {
      ServicesIsVisible.value = true
      hasEnteredServices = true
    }
  }
)

// eslint-disable-next-line
const { stop: stopAboutUs } = useIntersectionObserver(
  targetAboutUs,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasEnteredAboutUs) {
      AboutUsIsVisible.value = true
      hasEnteredAboutUs = true
    }
  }
)

// eslint-disable-next-line
const { stop: stopGallery } = useIntersectionObserver(
  targetGallery,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasEnteredGallery) {
      GalleryIsVisible.value = true
      hasEnteredGallery = true
    }
  }
)

// eslint-disable-next-line
const { stop: stopContactUs } = useIntersectionObserver(
  targetContactUs,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasEnteredContactUs) {
      ContactUsIsVisible.value = true
      hasEnteredContactUs = true
    }
  }
)

</script>

<style>

.nav-link {
  color: white !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
}

.custom-navbar {
  background-color: #1c1f26 !important;
}

.show-enter-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.show-enter {
  opacity: 0;
  transform: translateY(100px);
}
.show-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.default-animation {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.default-animation.show {
  opacity: 1;
  transform: translateY(0);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #14161b;
}
</style>
