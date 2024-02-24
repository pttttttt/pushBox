<template>
  <div class="container">
    <div class="game-region">
      <MyBox :boxArr="boxArr" />
    </div>
  </div>
</template>

<script>
import { boxArr } from '../utils/config'
import MyBox from './MyBox.vue'

export default {
  name: 'PushBox',
  components: { MyBox },
  data () {
    return {
      boxArr
    }
  },
  methods: {
    // keyUp (e) {
    //   const { children, role } = boxArr[0]
    //   const move = {
    //     get x () {
    //       return role.x
    //     },
    //     get y () {
    //       return role.y
    //     },
    //     /**
    //     * @param {number} newValue
    //     */
    //     set x (newValue) {
    //       let x = newValue > 4 ? 4 : newValue < 0 ? 0 : newValue
    //       role.x = x
    //     },
    //     /**
    //     * @param {number} newValue
    //     */
    //     set y (newValue) {
    //       let y = newValue > 4 ? 4 : newValue < 0 ? 0 : newValue
    //       role.y = y
    //     },
    //     ArrowUp () {
    //       this.y--
    //     },
    //     ArrowDown () {
    //       this.y++
    //     },
    //     ArrowLeft () {
    //       this.x--
    //     },
    //     ArrowRight () {
    //       this.x++
    //     }
    //   }
    //   move[e.key]()
    // }
  },
  mounted () {
    const { children, role } = boxArr[0]
    console.log(children)
    const roleMove = {
      get x () {
        return role.x
      },
      get y () {
        return role.y
      },
      /**
      * @param {number} newValue
      */
      set x (diff) {
        let x = this.x + diff
        x = x > 4 ? 4 : x < 0 ? 0 : x
        role.x = x
      },
      /**
      * @param {number} newValue
      */
      set y (diff) {
        let y = this.y + diff
        y = y > 4 ? 4 : y < 0 ? 0 : y
        role.y = y
      },
      ArrowUp () {
        this.y = -1
      },
      ArrowDown () {
        this.y = 1
      },
      ArrowLeft () {
        this.x = -1
      },
      ArrowRight () {
        this.x = 1
      }
    }
    // const boxMove = coordinate => {
      
    // }
    addEventListener('keyup', e => {
      roleMove[e.key] && roleMove[e.key]()
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  .game-region {
    width: 90vh;
    height: 90vh;
  }
}
</style>
