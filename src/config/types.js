/**
 * 单次出牌长度对应规则
 1  -> [单张]
 2  -> [对子, 火箭]
 3  -> [三不带]
 4  -> [三带一, 炸弹]
 5  -> [三带二, 四带一, 五顺]
 6  -> [三带三, 二连飞机不带, 四带二, 三连对, 六顺]
 7  -> [七顺]
 8  -> [八顺, 四连对, 四带两对, 二连飞机带二]
 9  -> [九顺, 三连飞机不带]
 10 -> [十顺, 五连对, 二连飞机带两对]
 11 -> [十一顺]
 12 -> [十二顺, 六连对, 三连飞机带三, 四连飞机不带]
 14 -> [七连对]
 15 -> [五连飞机不带, 三连飞机带三对]
 16 -> [八连对, 四连飞机两]
 18 -> [九连对, 六连飞机不带]
 20 -> [十连对, 四连飞机带四对, 五连飞机带五]
 */
export default {
  1: ['isDanzhang'],
  2: ['isDuiZi', 'isHuoJian'],
  3: ['is3BuDai'],
  4: ['is3Dai1', 'isZhaDan'],
  5: ['is3Dai2', 'is4Dai1', 'is5Shun'],
  6: ['is3Dai3', 'is2LianFeiJiBuDai', 'is4Dai2', 'is3LianDui', 'is6Shun'],
  7: ['is7Shun'],
  8: ['is4DaiDui', 'is2LianFeiJiDai2', 'is8Shun', 'is4LianDui'],
  9: ['is3LianFeiJiBuDai', 'is9Shun'],
  10: ['is2LianFeiJiDai2Dui', 'is10Shun', 'is5LianDui'],
  11: ['is11Shun'],
  12: ['is4LianFeiJiBuDai', 'is3LianFeiJiDai3', 'is12Shun', 'is6LianDui'],
  14: ['is7LianDui'],
  15: ['is5LianFeiJiBuDai', 'is3LianFeiJiDai3Dui'],
  16: ['is4LianFeiJiDai4', 'is8LianDui'],
  18: ['is6LianFeiJiBuDai', 'is9LianDui'],
  20: ['is5LianFeiJiDai5', 'is4LianFeiJiDai4Dui', 'is10LianDui'],
}
