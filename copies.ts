export function copies<B>(ff: ((f: <A>(...xs: A[]) => A) => B)): B[] {
  let probe: any[] | undefined
  const hd = ff((...xs) => (probe = xs, xs[0]))
  if (probe === undefined) {
    return [hd]
  } else if (probe.length) {
    return [hd, ...probe.slice(1).map((_, i) => ff((...xs) => xs[i+1]))]
  } else {
    return []
  }
}
