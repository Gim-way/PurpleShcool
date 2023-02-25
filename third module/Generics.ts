function Generics<T, C>(a: T, b: C): C | boolean {
  return b
}

Generics<any, string>(1, 'Russs :love')
