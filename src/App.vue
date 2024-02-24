<template>
  <div id="app">
    <pushBox></pushBox>
  </div>
</template>

<script>
import pushBox from './views/pushBox.vue'

export default {
  name: 'App',
  components: {
    pushBox
  }
}
</script>

<style>
html, body, #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
