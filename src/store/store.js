import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  step: 1
}
const store = new Vuex.Store({
  // state: {
  //   count: 0,
  //   step: 1
  // },
  state,
  mutations: {
    increment (state) {
      // alert('被调用了')
      state.count ++
    }
  }
})
export default store
