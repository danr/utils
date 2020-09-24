const WM = new WeakMap<any, number>()
let next = 1

export function identify(x: any): number {
  if (!WM.has(x)) {
    WM.set(x, next)
    next++
  }
  return WM.get(x)
}
