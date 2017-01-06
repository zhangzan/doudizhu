import rules from 'src/utils/rules'

const config = [
  {
    name: '单张',
    rule: 'isDanzhang',
    right: [ [3], [17] ],
    wrong: [ [3, 4] ],
  },
  {
    name: '对子',
    rule: 'isDuiZi',
    right: [ [3, 3] ],
    wrong: [ [3, 4] ]
  },
  {
    name: '火箭',
    rule: 'isHuoJian',
    right: [ [16, 17] ],
    wrong: [ [10, 17] ]
  },
  {
    name: '三不带',
    rule: 'is3BuDai',
    right: [ [3,3,3] ],
    wrong: [ [3, 3, 2], [3,3,3, 4] ]
  },
  {
    name: '三带一',
    rule: 'is3Dai1',
    right: [ [3,3,3, 4], [3, 4,4,4]],
    wrong: [ [3,3,3,3], [3, 3, 4, 4], [3, 3, 4, 5] ]
  },
  {
    name: '三带二',
    rule: 'is3Dai2',
    right: [ [3,3,3, 5,5], [3,3, 4,4,4]],
    wrong: [ [3,3,3,3, 4], [3, 3, 4, 4, 5], [3,3,3, 4, 5] ]
  },
  {
    name: '三带三',
    rule: 'is3Dai3',
    right: [[3,3,3, 4,4,4], [3,3,3, 5,5,5]],
    wrong: [ [3,3,3, 4,4,5], [3,3, 4,4, 5,5], [3,3,3,3, 4,5], [3,3,3,3, 4,4] ]
  },
  {
    name: '炸弹',
    rule: 'isZhaDan',
    right: [ [3,3,3,3] ],
    wrong: [ [3, 3, 3, 4], [3, 3, 4, 4], [3, 3, 4, 5] ]
  },
  {
    name: '四带一',
    rule: 'is4Dai1',
    right: [ [3,3,3,3, 4], [3, 5,5,5,5] ],
    wrong: [ [3,3,3, 4,4], [3,3, 4,4 ,5], [3,3, 4,5,6] ]
  },
  {
    name: '四带二',
    rule: 'is4Dai2',
    right: [ [3,3,3,3, 4,4], [3,4, 5,5,5,5] ],
    wrong: [ [3,3,3, 4,4,4], [3,3, 4,4, 5,5], [3,4, 5,5,6,6] ]
  },
  {
    name: '四带两对',
    rule: 'is4DaiDui',
    right: [ [3,3,3,3, 4,4, 6,6], [3,3, 4,4,4,4, 7,7] ],
    wrong: [ [3,3,3,3, 4,5, 6,6], [3,3, 4,4,4,5, 7,7] ]
  },
  {
    name: '二连飞机不带',
    rule: 'is2LianFeiJiBuDai',
    right: [ [3,3,3, 4,4,4] ],
    wrong: [ [3,3,3, 5,5,5], [3, 4,4, 5,5,5], [4,4, 5,5,5,5], [14,14,14, 15,15,15] ]
  },
  {
    name: '三连飞机不带',
    rule: 'is3LianFeiJiBuDai',
    right: [ [3,3,3, 4,4,4, 5,5,5],],
    wrong: [ [3,3,3, 5,5,5, 6,6,6], [3,3,3,3, 4,4, 5,5,5], [3,3,3, 4,4,4, 5,5,5,5], [13,13,13, 14,14,14, 15,15,15] ]
  },
  {
    name: '四连飞机不带',
    rule: 'is4LianFeiJiBuDai',
    right: [ [3,3,3, 4,4,4, 5,5,5, 6,6,6] ],
    wrong: [
      [3,3,3, 4,4,4, 5,5,5, 7,7,7],
      [3,3,3,3, 4,4, 5,5,5, 6,6,6],
      [3,3,3,3, 4,4, 5,5,5,5, 6,6],
      [12,12,12, 13,13,13, 14,14,14, 15,15,15]
    ]
  },
  {
    name: '五连飞机不带',
    rule: 'is5LianFeiJiBuDai',
    right: [ [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7] ],
    wrong: [
      [3,3,3, 4,4,4, 5,5,5, 7,7,7, 8,8,8],
      [3,3,3,3, 4,4, 5,5,5, 6,6,6, 7,7,7],
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8],
      [11,11,11, 12,12,12, 13,13,13, 14,14,14, 15,15,15]
    ]
  },
  {
    name: '六连飞机不带',
    rule: 'is6LianFeiJiBuDai',
    right: [ [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8] ],
    wrong: [
      [3,3,3, 4,4,4, 5,5,5, 7,7,7, 8,8,8, 9,9,9],
      [3,3,3,3, 4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8],
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8, 9,9,9],
      [10,10,10, 11,11,11, 12,12,12, 13,13,13, 14,14,14, 15,15,15]
    ]
  },
  {
    name: '二连飞机带二',
    rule: 'is2LianFeiJiDai2',
    right: [
      [3,3, 4,4,4, 5,5,5],
      [3,3,3, 4,4,4, 5,6],
      [3,3,3, 4,4,4, 4,5],
      [3,3,3,3, 4,4,4,4]
    ],
    wrong: [
      [3,3,3, 4,4, 5,5,5],
      [3,3,3,3, 4,4, 5,5],
      [14,14,14, 15,15,15, 3,4]
    ]
  },
  {
    name: '三连飞机带三',
    rule: 'is3LianFeiJiDai3',
    right: [
      [3,3,3, 4,4,4, 5,5,5, 6,7,8],
      [3,3,3, 4,4,4, 5,5,5,5, 7,8],
      [3,3,3,3, 4,4,4,4, 5,5,5,5]
    ],
    wrong: [
      [3,3,3, 4,4, 5,5,5, 6,6,6],
      [3,3,3, 4,4,4, 5,5,5, 6,7],
      [13,13,13, 14,14,14, 15,15,15, 3,4,5]
    ]
  },
  {
    name: '四连飞机带四',
    rule: 'is4LianFeiJiDai4',
    right: [
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,8,9,10],
      [3,3,3, 4,4,4, 5,5,5,5, 6,6,6, 7,8,9],
      [3,3,3,3, 4,4,4,4, 5,5,5,5, 6,6,6,6]
    ],
    wrong: [
      [3,3,3, 4,4, 5,5,5, 6,6,6, 7,7,7,7],
      [3,3,3, 4,4, 5,5,5, 6,6,6, 7,7,7, 8,9],
      [12,12,12, 13,13,13, 14,14,14, 15,15,15, 3,4,5]
    ]
  },
  {
    name: '五连飞机带五',
    rule: 'is5LianFeiJiDai5',
    right: [
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,9,10,11,12],
      [3,3,3, 4,4,4, 5,5,5,5, 6,6,6,6, 7,7,7,7, 8,8],
      [3,3,3,3, 4,4,4,4, 5,5,5,5, 6,6,6,6, 7,7,7,7,]
    ],
    wrong: [
      [3,3,3, 4,4, 5,5,5, 6,6,6, 7,7,7, 8,8,8, 9,9],
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 8,9],
      [11,11,11,11, 12,12,12, 13,13,13, 14,14,14, 15,15,15, 3,4,5]
    ]
  },
  {
    name: '二连飞机带两对',
    rule: 'is2LianFeiJiDai2Dui',
    right: [
      [3,3,3, 4,4,4, 5,5, 6,6],
      [3,3, 4,4,4, 5,5,5, 6,6],
    ],
    wrong: [
      [3,3,3, 4,4, 5,5,5, 6,6],
    ]
  },
  {
    name: '三连飞机带三对',
    rule: 'is3LianFeiJiDai3Dui',
    right: [
      [3,3,3, 4,4,4, 5,5,5, 7,7, 8,8, 10,10],
      [3,3, 4,4,4, 5,5,5, 6,6,6, 9,9, 11,11],
    ],
    wrong: [
      [3,3, 4,4,4, 5,5, 6,6,6, 7,7,7, 9,9],
    ]
  },
  {
    name: '四连飞机带四对',
    rule: 'is4LianFeiJiDai4Dui',
    right: [
      [3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7, 8,8, 11,11, 13,13],
      [3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 9,9, 11,11, 12,12],
    ],
    wrong: [
      [3,3, 4,4,4, 5,5, 6,6,6, 7,7,7, 8,8,8, 9,9, 11,11],
    ]
  },
  {
    name: '五顺',
    rule: 'is5Shun',
    right: [ [3,4,5,6,7] ],
    wrong: [
      [3,4,5,7,8],
      [11,12,13,14,15],
    ]
  },
  {
    name: '十二顺',
    rule: 'is12Shun',
    right: [ [3,4,5,6,7,8,9,10,11,12,13,14] ],
    wrong: [
      [3,4,5,6,7,8,9,10,11,12,14],
      [4,5,6,7,8,9,10,11,12,13,14,15],
    ]
  },
  {
    name: '三连对',
    rule: 'is3LianDui',
    right: [ [3,3, 4,4, 5,5] ],
    wrong: [
      [3,3, 4,4, 6,6],
      [13,13, 14,14, 15,15,15],
    ]
  },
  {
    name: '十连对',
    rule: 'is10LianDui',
    right: [ [3,3, 4,4, 5,5, 6,6, 7,7, 8,8, 9,9, 10,10, 11,11, 12,12] ],
    wrong: [
      [3,3, 4,4, 5,5, 6,6, 7,7, 8,8, 9,9, 10,10, 11,11, 13,13],
      [7,7, 8,8, 9,9, 10,10, 11,11, 12,12, 13,13, 14,14, 15,15],
    ]
  },
]

config.forEach((v ,i) => {
  describe(v.name, () => {
    v.right.forEach((v2, i2) => {
      it(`${v2} 是${v.name}`, () => {
        expect(rules[v.rule](v2)).to.equal(true)
      })
    })

    v.wrong.forEach((v2, i2) => {
      it(`${v2} 不是${v.name}`, () => {
        expect(rules[v.rule](v2)).to.equal(false)
      })
    })
  })
})