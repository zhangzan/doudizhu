import _ from 'lodash'

window._ = _

function checkShun (arr) {
  let status = true

  for (let i = 0; i < (arr.length - 1); i++) {
    if ((arr[i] + 1) !== arr[i + 1]) {
      status = false
      break
    }
  }

  return status
}

/**
 * 计算元素重复个数返回个数
 * @param  Array array
 * @return Array
 * @demo
 *  [2, 2, 3, 3] -> [2, 2]
 *  [2, 2, 2, 3] -> [1, 3]
 *  [2, 2, 2, 3, 3, 5] -> [1, 2, 3]
 */
export const countRepeat = array => Object.values(_.countBy(array)).sort()

/**
 * 判断顺子
 * @param  {[type]}  pokers [description]
 * @return {Boolean}        [description]
 */
export const isShun = function (pokers) {
  const len = pokers.length

  //  最小5张 最大13
  if (len < 5 || len > 13) return false
  //  最大到 A
  if (pokers[len - 1] > 14) return false

  return checkShun(pokers)
}

/**
 * 判断连对
 * @param  {array}  pokers
 * @return {Boolean}
 * @demo
 * [2,2,3,3,4,4]
 */
export const isLianDui = function (pokers) {
  let arr = _.uniq(pokers)
  let len = arr.length
  let status = true

  //  最小5张 最大20 最大到 A
  if (len < 3
    || len > 10
    || arr.length * 2 !== pokers.length
    || arr[len - 1] > 14
  ) return false

  if (!checkShun(arr)) status = false

  // 每个值 出现2次
  let counts = countRepeat(pokers)
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] !== 2) {
      status = false
      break
    }
  }

  return status
}

/**
 * 判断N连飞机不带
 * @param  {array}  pokers
 * @return {Boolean}
 * @demo
 * [3,3,3, 4,4,4]
 */
export const isFeiJiBuDai = function (pokers) {
  let arr = _.uniq(pokers)
  let len = arr.length
  let counts = countRepeat(pokers)

  for (var i = 0; i < counts.length; i++) {
    if (counts[i] !== 3) return false
  }

  //  最小5张 最大20 最大到 A
  if (len < 2
    || arr.length * 3 !== pokers.length
    || len > 10
    || arr[len - 1] > 14
    ) return false

  return checkShun(arr)
}

/**
 * 判断N连飞机带N个
 * @param  {array}  pokers
 * @return {Boolean}
 * @demo
 * [3,3,3, 4,4,4, 5,5]
 * [3,3,3, 4,4,4, 5,6]
 */
export const isFeiJiDaiN = function (pokers) {
  let m = 0
  let n = pokers.length / 4
  let status = true
  let arr = []
  let counts = _.countBy(pokers)

  // 必须有 n 个 3个
  for (let key in counts) {
    if (counts[key] > 2) {
      if (key > 14) {
        status = false
      } else {
        arr.push(parseInt(key))
        m++
      }
    }
  }

  if (m < n || !checkShun(arr.sort())) status = false

  return status
}

/**
 * 判断N连飞机带N对
 * @param  {array}  pokers
 * @return {Boolean}
 * @demo
 * [3,3,3, 4,4,4 ,5,5,6,6]
 */
export const isFeiJiDaiNDui = function (pokers) {
  let m = 0
  let n = pokers.length / 5
  let status = true
  let arr = []
  let counts = _.countBy(pokers)

  // 必须有 n 个 3个
  for (let key in counts) {
    if (counts[key] > 2) {
      if (key > 14) {
        status = false
      } else {
        arr.push(parseInt(key))
        m++
      }
    }
  }

  if (m < n || !checkShun(arr.sort())) status = false

  return status
}
