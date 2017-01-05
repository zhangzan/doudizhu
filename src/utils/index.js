import _ from 'lodash'

export const count = array => Object.values(_.countBy(array)).sort()

export const isShun = function (pokers) {
  const len = pokers.length

  //  最小5张 最大13
  if (len < 5 || len > 13) return false
  //  最大到 A
  if (pokers[len - 1] > 14) return false

  let status = true

  for (let i = 0; i < (len - 1); i++) {
    if ((pokers[i] + 1) !== pokers[i + 1]) {
      status = false
      break
    }
  }

  return status
}

export const isLianDui = function (pokers) {
  const len = pokers.length

  //  最小5张 最大13
  if (len < 5 || len > 13) return false
  //  最大到 A
  if (pokers[len - 1] > 14) return false

  let status = true

  for (let i = 0; i < (len - 1); i++) {
    if ((pokers[i] + 1) !== pokers[i + 1]) {
      status = false
      break
    }
  }

  return status
}
