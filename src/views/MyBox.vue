<template>
  <boxItem :config="boxArr[0]">
    <div class="small-box-container">
      <div
        class="small-box"
        v-for="([left, top], key) in boxArr[0].children"
        :key="key"
        :style="`top: ${top * 20}%; left: ${left * 20}%;`"
        >
        <boxItem :config="boxArr[key]">
          <div class="small-box-container">
            <div
              class="small-box"
              v-for="([left, top], key) in boxArr[key].children"
              :key="key"
              :style="`top: ${top * 20}%; left: ${left * 20}%;`"
              >
              <boxItem :config="boxArr[key]"></boxItem>
            </div>
          </div>
        </boxItem>
      </div>
    </div>
  </boxItem>
</template>

<script>
import boxItem from './BoxItem.vue'

export default {
  name: 'MyBox',
  components: { boxItem },
  props: ['boxArr'],
  data () {
    return {
      // boxArr
    }
  }
}
</script>

<style scoped lang="scss">
.small-box-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .small-box {
    width: 20%;
    padding-top: 20%;
    position: absolute;
    &>div {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>