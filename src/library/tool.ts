// 深拷贝对象或数组
export function clone<T = any>(obj: T) {
  return JSON.parse(JSON.stringify(obj)) as T
}