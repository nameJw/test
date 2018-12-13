<template>
  <div id="app">
    <vuexTestParent></vuexTestParent>
    <!-- <tableCheck></tableCheck> -->
  </div>
</template>

<script>
import vuexTestParent from './components/vuexTest/parent'
// import tableCheck from './components/tableCheck/table.vue'

export default {
  name: 'app',
  components: {
    vuexTestParent,
    // tableCheck
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
