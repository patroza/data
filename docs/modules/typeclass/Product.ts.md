---
title: typeclass/Product.ts
nav_order: 63
parent: Modules
---

## Product overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [type class](#type-class)
  - [Product (interface)](#product-interface)
- [utils](#utils)
  - [struct](#struct)
  - [tuple](#tuple)

---

# type class

## Product (interface)

**Signature**

```ts
export interface Product<F extends TypeLambda> extends SemiProduct<F>, Of<F> {
  readonly productAll: <R, O, E, A>(collection: Iterable<Kind<F, R, O, E, A>>) => Kind<F, R, O, E, Array<A>>
}
```

Added in v1.0.0

# utils

## struct

**Signature**

```ts
export declare const struct: <F extends TypeLambda>(
  F: Product<F>
) => <R extends { readonly [x: string]: Kind<F, any, any, any, any> }>(
  fields: R
) => Kind<
  F,
  [R[keyof R]] extends [Kind<F, infer R, any, any, any>] ? R : never,
  [R[keyof R]] extends [Kind<F, any, infer O, any, any>] ? O : never,
  [R[keyof R]] extends [Kind<F, any, any, infer E, any>] ? E : never,
  { [K in keyof R]: [R[K]] extends [Kind<F, any, any, any, infer A>] ? A : never }
>
```

Added in v1.0.0

## tuple

**Signature**

```ts
export declare const tuple: <F extends TypeLambda>(
  F: Product<F>
) => <T extends readonly Kind<F, any, any, any, any>[]>(
  ...elements: T
) => Kind<
  F,
  [T[number]] extends [Kind<F, infer R, any, any, any>] ? R : never,
  [T[number]] extends [Kind<F, any, infer O, any, any>] ? O : never,
  [T[number]] extends [Kind<F, any, any, infer E, any>] ? E : never,
  { [I in keyof T]: [T[I]] extends [Kind<F, any, any, any, infer A>] ? A : never }
>
```

Added in v1.0.0
