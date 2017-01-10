<template lang="jade">
.poker(:class="['v' + data.value,  'type' + data.type]" )
  i.up {{data.name}}
  i.down {{data.name}}
{{data.value}} - {{data.type}}
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="stylus">
.poker
  display inline-block
  position relative
  user-select none
  width 150px
  height 220px
  border-radius 5px
  background white
  box-shadow 3px 3px 7px rgba(0,0,0,0.3)
  font-family Times New Roman, serif
  text-align center
  &.type1,
  &.type3
    color #000
  &.type2,
  &.type4
    color #ff0000
  &::before
    position absolute
    font-size 35px
    left 10px
    top 38px
  &::after
    position absolute
    font-size 35px
    right 10px
    bottom 38px
  &.type1::before, &.type1::after
    content "♠"
  &.type2::before, &.type2::after
    content "♥"
  &.type3::before, &.type3::after
    content "♣"
  &.type4::before, &.type4::after
    content "♦"
  &.type5
    i
      word-wrap break-word
      width 1em
  &.v16
    color #ff0000
  i
    position absolute
    font-size 33px
    text-align center
    width 1.2em
    &.up
      top 10px
      left 0
    &.down
      bottom 10px
      right 0

</style>
