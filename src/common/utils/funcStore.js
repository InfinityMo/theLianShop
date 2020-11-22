// 深拷贝
export function deepClone (obj) {
  const target = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key])
      } else {
        target[key] = obj[key]
      }
    }
  }
  return target
}
// 滚动条返回顶部
export function backTop () {
  const timer = setInterval(function () {
    const top = document.body.scrollTop || document.documentElement.scrollTop
    const speed = top / 4
    if (document.body.scrollTop !== 0) {
      document.body.scrollTop -= speed
    } else {
      document.documentElement.scrollTop -= speed
    }
    if (top === 0) {
      clearInterval(timer)
    }
  }, 30)
}
