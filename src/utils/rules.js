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
   13. 二连飞机带二(8)
   14. 二连飞机带两对(10)
   15. 三连飞机不带(9)
   16. 三连飞机带三(12)
   17. 三连飞机带三对(15)
   18. 四连飞机不带(12)
   19. 四连飞机带四(16)
   20. 四连飞机带四对(20)
   21. 五连飞机不带(15)
   22. 五连飞机带五(20)
   23. 六连飞机不带(18)
   24. 五顺(5)
   25. 六顺(6)
   26. 七顺(7)
   27. 八顺(8)
   28. 九顺(9)
   29. 十顺(10)
   30. 十一顺(11)
   31. 十二顺(12)
   32. 十三顺(13)
   33. 三连对(6)
   34. 四连对(8)
   35. 五连对(10)
   36. 六连对(12)
   37. 七连对(14)
   38. 八连对(16)
   39. 九连对(18)
   40. 十连对(20)
 */
import _ from 'lodash'
import { count, isShun, isLianDui } from './index.js'

export default {
  // 单张
  isDanzhang: pokers => pokers.length === 1,
  // 对子
  isDuiZi: pokers => pokers.length === 2 && pokers[0] === pokers[1],
  // 火箭
  isHuoJian: pokers => pokers.length === 2
    && pokers[0] === 16
    && pokers[1] === 17,
  // 三不带
  is3BuDai: pokers => pokers.length === 3
    && pokers[0] === pokers[1]
    && pokers[1] === pokers[2],
  // 三带一
  is3Dai1: pokers => pokers.length === 4
    && count(pokers)[0] === 1
    && count(pokers)[1] === 3,
  // 三带二
  is3Dai2: pokers => pokers.length === 5
    && count(pokers)[0] === 2
    && count(pokers)[1] === 3,
  // 三带三
  is3Dai3: pokers => pokers.length === 6
    && count(pokers)[0] === 3
    && count(pokers)[1] === 3
    && (count(pokers)[0] + 1) !== count(pokers)[1],
  // 炸弹
  isZhaDan: pokers => pokers.length === 4 && _.uniq(pokers).length === 1,
  // 四带一
  is4Dai1: pokers => pokers.length === 5
    && count(pokers).length === 2
    && count(pokers)[0] === 1
    && count(pokers)[1] === 4,
  // 四带二
  is4Dai2: pokers => pokers.length === 6
    && count(pokers).length === 2
    && count(pokers)[0] === 2
    && count(pokers)[1] === 4,
  // 四带两对
  is4DaiDui: pokers => pokers.length === 8
    && count(pokers).length === 3
    && count(pokers)[0] === 2
    && count(pokers)[1] === 2
    && count(pokers)[2] === 4,
  // 二连飞机不带(6)
  is2LianFeiJiBuDai: pokers => pokers.length === 6
    && count(pokers).length === 2
    && count(pokers)[0] === 3
    && count(pokers)[1] === 3
    && (count(pokers)[0] + 1) === count(pokers)[1],
  // 二连飞机带二(8) 333 444 56  [1,1,3,3] [2,3,3]
  is2LianFeiJiDai2: pokers => pokers.length === 8
    && (count(pokers).length === 3 || count(pokers).length === 4)
    && count(pokers)[0] === 3
    && count(pokers)[1] === 3
    && (count(pokers)[0] + 1) === count(pokers)[1],
  // 二连飞机带两对(10)
  // 三连飞机不带(9)
  // 三连飞机带三(12)
  // 三连飞机带三对(15)
  // 四连飞机不带(12)
  // 四连飞机带四(16)
  // 四连飞机带四对(20)
  // 五连飞机不带(15)
  // 五连飞机带五(20)
  // 六连飞机不带(18)
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
  // 十三顺(13)
  is13Shun: pokers => pokers.length === 13 && isShun(pokers),
  // 三连对(6)
  is3LianDui: pokers => pokers.length === 6 && isLianDui(pokers),
  // 四连对(8)
  is4LianDui: pokers => pokers.length === 6 && isLianDui(pokers),
  // 五连对(10)
  // 六连对(12)
  // 七连对(14)
  // 八连对(16)
  // 九连对(18)
  // 十连对(20)
}
