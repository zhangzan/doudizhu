<template lang="jade">
  #app
    top(:di-pai="diPai")
    button(@click="start") 重新开始
    .my-poker
      .poker-list
        poker(
          v-for="(item, index) in myPokers",
          :data="item",
          :class="{ selected: item.selected }"
          @click.native="selectPoker(index)",
        )
</template>

<script>
import _ from 'lodash'
import top from './components/top'
import poker from './components/poker'
import pokers from './config/pokers'
import Rule from './utils/rules'

export default {
  name: 'app',
  components: { poker, top },
  data () {
    return {
      pokers: [],
      diPai: [],
      // 0 自己 1 右边 2 左边
      players: [
        { isDiZhu: 0, pokers: [] },
        { isDiZhu: 1, pokers: [] },
        { isDiZhu: 0, pokers: [] },
      ],
    }
  },
  methods: {
    reset () {
      this.players.forEach((v, i) => {
        v.pokers = []
      })
    },
    sendPoker () {
      this.reset()

      let list = _.shuffle(pokers)
      let i = 0

      this.diPai = list.splice(0, 3)

      while (list.length) {
        let poker = list.pop()
        poker.selected = false

        this.players[i].pokers.push(poker)

        i++
        if (i > 2) i = 0
      }
    },
    sortPoker () {
      this.players.forEach((v, i) => {
        let arr = v.pokers
        v.pokers = _.orderBy(arr, ['value', 'type'], ['desc', 'asc'])
      })
    },
    sendDiPai () {
      this.players.forEach((v, i) => {
        if (v.isDiZhu) v.pokers = v.pokers.concat(this.diPai)
      })
    },
    start () {
      this.sendPoker()
      this.sendDiPai()
      this.sortPoker()
      // setTimeout(this.sortPoker, 300)
    },
    selectPoker (index) {
      let item = this.myPokers[index]

      item.selected = !item.selected

      this.players[0].pokers.splice(index, 1, item)
    }
  },
  computed: {
    myPokers () {
      return this.players[0].pokers
    },
    selectedPokers () {
      let arr = _.filter(this.myPokers, v => v.selected)
      let arr2 = []

      arr.forEach((v, i) => arr2.push(v.value))

      return arr2
    }
  },
  created () {
    this.start()
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
.poker-list
  position absolute
  bottom 30px
  left 30px
  .poker
    float left
    margin-left -100px
    &:first-child
      margin-left 0
    &.selected
      transform: translateY(-10px)
</style>
