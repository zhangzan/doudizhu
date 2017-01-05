import rules from 'src/utils/rules'

const config = [
  {
    name: '单张',
    rule: 'isDanzhang',
    right: [3],
    wrong: [ [3, 4] ],
  },
  {
    name: '对子',
    rule: 'isDuiZi',
    right: [3, 3],
    wrong: [ [3, 4] ]
  },
  {
    name: '火箭',
    rule: 'isHuoJian',
    right: [16, 17],
    wrong: [ [3, 17] ]
  },
  {
    name: '三不带',
    rule: 'isSanBuDai',
    right: [3, 3, 3],
    wrong: [ [3, 3, 2], [3, 3, 3, 4] ]
  },
  {
    name: '三带一',
    rule: 'isSanDaiYi',
    right: [3, 3, 3, 4],
    wrong: [ [3, 3, 3, 3], [3, 3, 4, 4], [3, 3, 4, 5] ]
  },
  {
    name: '炸弹',
    rule: 'isZhaDan',
    right: [3, 3, 3, 3],
    wrong: [ [3, 3, 3, 4], [3, 3, 4, 4], [3, 3, 4, 5] ]
  },
  {
    name: '三带二',
    rule: 'isSanDaiEr',
    right: [3, 3, 3, 4, 4],
    wrong: [ [3, 3, 3, 3, 4], [3, 3, 4, 4, 5], [3, 4, 5, 6, 6] ]
  },
  {
    name: '四带一',
    rule: 'isSiDaiYi',
    right: [3, 3, 3, 3, 4],
    wrong: [ [3, 3, 3, 4, 4], [3, 3, 4, 4, 5], [3, 4, 5, 6, 6] ]
  },
  {
    name: '五张顺',
    rule: 'isWuZhangShun',
    right: [3, 4, 5, 6, 7],
    wrong: [ [3, 4, 5, 6, 6], [3, 4, 5, 6], [11, 12, 13, 14, 15] ]
  },
]

config.forEach((v ,i) => {
  describe(v.name, () => {
    it(`${v.right} 是${v.name}`, () => {
      expect(rules[v.rule](v.right)).to.equal(true)
    })

    v.wrong.forEach((v2, i2) => {
      it(`${v2} 不是${v.name}`, () => {
        expect(rules[v.rule](v2)).to.equal(false)
      })
    })
  })
})
