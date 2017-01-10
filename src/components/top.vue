<template lang="jade">
.cp-top
  .list
    poker(v-for="item in diPai", :data="item")

</template>

<script>
import poker from './poker'

export default {
  props: ['diPai'],
  components: { poker },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="stylus">
.cp-top
  background url('~assets/top.png') no-repeat center
  height 127px
  .list
    transform: scale(.3)
    transform-origin top center
    .poker
      margin: 0 10px
</style>
