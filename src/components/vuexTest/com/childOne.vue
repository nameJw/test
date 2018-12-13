<template>
  <div id="child-one">
    {{ msg }}
    <p style="color: red">{{ `${count} + ${step}` }}</p>
    <!-- <p style="color: red">{{ `${computeNum} + ${computeStep}` }}</p> -->
    <button @click="plusOne">+1</button>
  </div>
</template>
<script>
// import store from '../../../store/store.js'
import { mapState } from 'vuex'
// import Vuex from 'vuex'
export default {
  data () {
    return {
      // computeNum: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    plusOne () {
      this.$store.commit('increment')
    }
  },
  // 通常情况是computed中是这样写的，但是一旦store.state中的全局状态过多则代码很冗杂
  // computed: {
  //   computeNum () {
  //     return this.$store.state.count
  //   },
  //   computeStep () {
  //     return this.$store.state.step
  //   }
  // },

  // 这样写是因为不想要用store中state的名称，自定义名称的时候就要给mapState传入一个对象
  // computed: mapState({
  //   computeNum: state => state.count,
  //   computeStep: state => state.step
  // }),

  // 当你DOM中要显示的名称和store中state的值一样时，可以给mapState传入一个字符串数组
  // computed: mapState(['count', 'step']),

  // 像这样给把mapState赋值给computed的话，那么如果当前模块有自己需要computed的属性时，就不适合了
  computed: {
    // 假设这是当前模块需要的计算属性
    // localComputed () {/*........*/},

    // 这是全局状态下的
    // 我们可以把mapState用对象展开运算符(...)把mapState给展开，因为mapState函数返回的本身就是一个对象
    // ...mapState({
    //   computeNum: state => state.count,
    //   computeStep: state => state.step
    // })

    // 或者如下
    ...mapState(['count', 'step'])
  },
  created () {
    // console.log(Vuex)
  }
}
</script>
