<script setup>
import { useWakeLockStore } from './stores/wakelock';
const wakeLock = useWakeLockStore()
</script>

<template>
  <main>
    <h1>
      <a href="https://projects.blender.org/studio/flamenco/issues/99436">#99436</a>
      POC
    </h1>
    <div class="container">
      <p>Wake Lock:</p>
      <input type="checkbox" @click="wakeLock.toggle">
    </div>
  </main>

  <video v-if="wakeLock.enabled" class="video-player" controls loop autoplay>
    <source src="/one-second-video.mp4" type="video/mp4">
  </video>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type='checkbox'] {
  width: 25px;
  height: 25px;
}

.video-player {
  position: absolute;
  top: -500px;
}

main {
  border: 1px solid;
  padding: 1rem 4rem;
  border-radius: 8px;
}
</style>
