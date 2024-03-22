<template>
  <div>
    <FirstScreen />
  </div>
  <div
    ref="targetWhyUs"
    :class="{ 'default-animation': true, 'show': whyUsIsVisible }"
    class="show-enter"
  >
    <WhyUsComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

import FirstScreen from '@/components/FirstScreen.vue'
import WhyUsComponent from '@/components/WhyUsComponent.vue'

const targetWhyUs = ref(null)
const whyUsIsVisible = ref(false)

let hasEnteredWhyUs = false

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

</script>

<style>

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
