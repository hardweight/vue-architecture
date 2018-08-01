import Vue from 'vue'

export default {
  get () {
    return Vue.axios.get('?results=10')
  }
}
