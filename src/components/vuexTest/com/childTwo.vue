<template>
  <div id="child-two">
    <p style="color: red" v-text="`这是子组件2显示的值：${num}`"></p>
    <p style="color: red" v-text="`这是父组件通过依赖注册的值：${getMap}`"></p>
    <p style="color: red" v-text="`这是父组件通过依赖注册的值：${getMap2}`"></p>
    <el-button @click="show">click</el-button>
    {{temp}}
  </div>
</template>
<script>
// import store from '../../../store/store.js'
export default {
  computed: {
    num () {
      return this.$store.state.count
    }
  },
  inject: ['getMap', 'getMap2'],
  data () {
    return {
      arr: ['a', 'b', 'c', 'd'],
      temp: ''
    }
  },
  methods: {
    show () {
      let a = 
      echo('<ul>');
      for(let i=0; i < this.arr.length; i++) {
        echo('<li>');
        echo(this.arr[i]);
        echo('</li>');
      };
      echo('</ul>');
      this.temp = a
    }
  }
}
</script>
