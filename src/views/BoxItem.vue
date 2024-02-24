<template>
  <div class="container" :style="`background-color: ${bgc[config.bgc].wall};`" :title="config.id">
    <div
      class="door"
      v-for="(value, key) in config.door"
      :key="key"
      :style="`background-color: ${bgc[config.bgc].inner}; top: ${door[key].top}%; left: ${door[key].left}%; width: ${door[key].width}%; height: ${door[key].height}%;`"
    ></div>
    <div class="inner-layer" :style="`background-color: ${bgc[config.bgc].inner};`">
      <div
        class="role"
        v-if="config.role.show"
        :style="`background-color: ${roleColor.bgc}; top: ${config.role.y * 20}%; left: ${config.role.x * 20}%;`"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { bgc, roleColor, door } from '../utils/config'

export default {
  name: 'BoxItem',
  props: ['config'],
  data () {
    return {
      bgc,
      roleColor,
      door
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  position: relative;
  .inner-layer {
    width: 80%;
    padding-top: 80%;
    position: relative;
    .role {
      position: absolute;
      width: 20%;
      padding-top: 20%;
      transition: all .5s;
    }
  }
  .door {
    position: absolute;
  }
}
</style>
