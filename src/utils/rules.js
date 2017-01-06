/**
 * 玩家：3人
 * 每人 17 张 地主多 3 张
 * 排序后规则
   1. 单张(1)
   2. 对子(2)
   3. 火箭(2)
   4. 三不带(3)
   5. 三带一(4)
   6. 三带二(5)
   7. 三带三(6)
   8. 炸弹(4)
   9. 四带一(5)
   10. 四带二(6)
   11. 四带两对(8)
   12. 二连飞机不带(6)
   13. 三连飞机不带(9)
   14. 四连飞机不带(12)
   15. 五连飞机不带(15)
   16. 六连飞机不带(18)
   17. 二连飞机带二(8)
   18. 三连飞机带三(12)
   19. 四连飞机带四(16)
   20. 五连飞机带五(20)
   21. 二连飞机带两对(10)
   22. 三连飞机带三对(15)
   23. 四连飞机带四对(20)
   24. 五顺(5)
   25. 六顺(6)
   26. 七顺(7)
   27. 八顺(8)
   28. 九顺(9)
   29. 十顺(10)
   30. 十一顺(11)
   31. 十二顺(12)
   32. 三连对(6)
   33. 四连对(8)
   34. 五连对(10)
   36. 六连对(12)
   36. 七连对(14)
   37. 八连对(16)
   38. 九连对(18)
   39. 十连对(20)
 */
import _ from 'lodash'
import { countRepeat, isShun, isLianDui, isFeiJiBuDai, isFeiJiDaiN, isFeiJiDaiNDui } from './index.js'

export default {
  // 单张(1)
  isDanzhang: pokers => pokers.length === 1,
  // 对子(2)
  isDuiZi: pokers => pokers.length === 2 && pokers[0] === pokers[1],
  // 火箭(2)
  isHuoJian: pokers => pokers.length === 2 && pokers[0] === 16 && pokers[1] === 17,
  // 三不带(3)
  is3BuDai: pokers => pokers.length === 3 && pokers[0] === pokers[1] && pokers[1] === pokers[2],
  // 三带一(4)
  is3Dai1: pokers => pokers.length === 4 && countRepeat(pokers)[0] === 1 && countRepeat(pokers)[1] === 3,
  // 三带二(5)
  is3Dai2: pokers => pokers.length === 5 && countRepeat(pokers)[0] === 2 && countRepeat(pokers)[1] === 3,
  // 三带三(6)
  is3Dai3: pokers => pokers.length === 6 && countRepeat(pokers)[0] === 3 && countRepeat(pokers)[1] === 3 && (countRepeat(pokers)[0] + 1) !== countRepeat(pokers)[1],
  // 炸弹(4)
  isZhaDan: pokers => pokers.length === 4 && _.uniq(pokers).length === 1,
  // 四带一(5)
  is4Dai1: pokers => pokers.length === 5 && countRepeat(pokers).length === 2 && countRepeat(pokers)[0] === 1 && countRepeat(pokers)[1] === 4,
  // 四带二(6)
  is4Dai2: pokers => pokers.length === 6
    && countRepeat(pokers)[countRepeat(pokers).length - 1] === 4,
  // 四带两对(8)
  is4DaiDui: pokers => pokers.length === 8 && countRepeat(pokers).length === 3 && countRepeat(pokers)[0] === 2 && countRepeat(pokers)[1] === 2 && countRepeat(pokers)[2] === 4,
  // 二连飞机不带(6)
  is2LianFeiJiBuDai: pokers => pokers.length === 6 && isFeiJiBuDai(pokers),
  // 三连飞机不带(9)
  is3LianFeiJiBuDai: pokers => pokers.length === 9 && isFeiJiBuDai(pokers),
  // 四连飞机不带(12)
  is4LianFeiJiBuDai: pokers => pokers.length === 12 && isFeiJiBuDai(pokers),
  // 五连飞机不带(15)
  is5LianFeiJiBuDai: pokers => pokers.length === 15 && isFeiJiBuDai(pokers),
  // 六连飞机不带(18)
  is6LianFeiJiBuDai: pokers => pokers.length === 18 && isFeiJiBuDai(pokers),
  // 二连飞机带二(8) 333 444 56  [1,1,3,3] [2,3,3]
  is2LianFeiJiDai2: pokers => pokers.length === 8 && isFeiJiDaiN(pokers),
  // 三连飞机带三(12)
  is3LianFeiJiDai3: pokers => pokers.length === 12 && isFeiJiDaiN(pokers),
  // 四连飞机带四(16)
  is4LianFeiJiDai4: pokers => pokers.length === 16 && isFeiJiDaiN(pokers),
  // 五连飞机带五(20)
  is5LianFeiJiDai5: pokers => pokers.length === 20 && isFeiJiDaiN(pokers),
  // 二连飞机带两对(10)
  is2LianFeiJiDai2Dui: pokers => pokers.length === 10 && isFeiJiDaiNDui(pokers),
  // 三连飞机带三对(15)
  is3LianFeiJiDai3Dui: pokers => pokers.length === 15 && isFeiJiDaiNDui(pokers),
  // 四连飞机带四对(20) 4 * 5
  is4LianFeiJiDai4Dui: pokers => pokers.length === 20 && isFeiJiDaiNDui(pokers),
  // 五顺(5)
  is5Shun: pokers => pokers.length === 5 && isShun(pokers),
  // 六顺(6)
  is6Shun: pokers => pokers.length === 6 && isShun(pokers),
  // 七顺(7)
  is7Shun: pokers => pokers.length === 7 && isShun(pokers),
  // 八顺(8)
  is8Shun: pokers => pokers.length === 8 && isShun(pokers),
  // 九顺(9)
  is9Shun: pokers => pokers.length === 9 && isShun(pokers),
  // 十顺(10)
  is10Shun: pokers => pokers.length === 10 && isShun(pokers),
  // 十一顺(11)
  is11Shun: pokers => pokers.length === 11 && isShun(pokers),
  // 十二顺(12)
  is12Shun: pokers => pokers.length === 12 && isShun(pokers),
  // 三连对(6)
  is3LianDui: pokers => pokers.length === 6 && isLianDui(pokers),
  // 四连对(8)
  is4LianDui: pokers => pokers.length === 8 && isLianDui(pokers),
  // 五连对(10)
  is5LianDui: pokers => pokers.length === 10 && isLianDui(pokers),
  // 六连对(12)
  is6LianDui: pokers => pokers.length === 12 && isLianDui(pokers),
  // 七连对(14)
  is7LianDui: pokers => pokers.length === 14 && isLianDui(pokers),
  // 八连对(16)
  is8LianDui: pokers => pokers.length === 16 && isLianDui(pokers),
  // 九连对(18)
  is9LianDui: pokers => pokers.length === 18 && isLianDui(pokers),
  // 十连对(20)
  is10LianDui: pokers => pokers.length === 20 && isLianDui(pokers),
}
