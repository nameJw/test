<template>
  <div id="parent">
    <childOne :msg="msg"></childOne>
    <childTwo></childTwo>
  </div>
</template>
<script>
import childOne from './com/childOne'
import childTwo from './com/childTwo'
import axios from 'axios'
export default {
  components: {
    childOne,
    childTwo
  },
  provide () {
    return {
      getMap: this.msg,
      getMap2: this.p
    }
  },
  data () {
    return {
      msg: '这是父组件的data中的数据',
      p: 1
    }
  },
  methods: {
  },
  created () {
    // axios.interceptors.request.use(config => {
    //   console.log(config)
    // })
    axios.post('/api/login.action', {password: '123456', username: 'admin'}).then(res => {
      console.log(res)
    }).catch()
  }
}
</script>
