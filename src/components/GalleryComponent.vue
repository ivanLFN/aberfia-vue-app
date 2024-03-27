<template>
  <div class="gallery-component">
    <h3 class="gallery-header">Примеры выполненных работ</h3>
    <div>
      <div class="overflow-auto">
        <div class="d-flex flex-nowrap gallery-cards">
          <img class="gallery-card" v-for="(img, index) in imgsRef" :key="index" :src="img" @click="openLightbox(index)" />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GalleryComponent',
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgsRef = ref([
      'images/gallery/1.jpg',
      'images/gallery/2.jpg',
      'images/gallery/3.jpg',
      'images/gallery/4.jpg',
      'images/gallery/5.jpeg'
    ])
    const onShow = () => {
      visibleRef.value = true
    }
    const openLightbox = (index) => {
      indexRef.value = index
      onShow()
    }
    const onHide = () => {
      visibleRef.value = false
    }
    return {
      visibleRef,
      indexRef,
      imgsRef,
      openLightbox,
      onHide
    }
  }
};
</script>

<style>

.gallery-cards {
  margin-top: 3rem;
  overflow-y: hidden;
  padding: 30px 0;
}

.gallery-card {
  height: 500px;
  min-width: auto;
  max-width: 800px;
  margin-left: 30px;
  border-radius: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-card:hover {
  transform: scale(1.05);
}

.gallery-header {
  font-size: 2.5rem;
  color: white;
}

@media only screen and (max-width: 767px) {
  .gallery-header {
    font-size: 2rem;
  }
}
</style>
