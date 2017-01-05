<template lang="jade">
  #app
    poker
</template>

<script>
import poker from './components/poker'
import Rule from './utils/rules'

window.Rule = Rule
export default {
  name: 'app',
  components: { poker },
  methods: {
    test () {
      // const pokers = [{ value: 1 }]
    }
  },
  created () {
    this.test()
  }
}
</script>

<style lang="stylus">
@import base

body
  background url('~assets/bg.png')
  background-size cover
  height 100%
#app
  text-align center
</style>
