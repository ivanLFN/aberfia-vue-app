<template>
  <div class="first-screen">
    <video-background 
        src="video/video-list.mp4"
        style="max-height: 100vh; height: 100vh;"
    >
        <h1 style="color: white;">Hello welcome!</h1>
    </video-background>
  </div>
</template>

<script>
 import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'FirstScreen',
  components: {
    VideoBackground
  },
  data() {
    return {
      videoPath: '/video/video-list.mp4'
    };
  }
}
</script>

<style scoped>
.first-screen {
  height: 100vh;
}
</style>
