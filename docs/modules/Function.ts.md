---
title: Function.ts
nav_order: 13
parent: Modules
---

## Function overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [id](#id)
- [instances](#instances)
  - [Category](#category)
  - [Composable](#composable)
  - [getMonoid](#getmonoid)
  - [getSemigroup](#getsemigroup)
- [type lambdas](#type-lambdas)
  - [FunctionTypeLambda (interface)](#functiontypelambda-interface)
- [utils](#utils)
  - [FunctionN (interface)](#functionn-interface)
  - [LazyArg (interface)](#lazyarg-interface)
  - [SK](#sk)
  - [absurd](#absurd)
  - [apply](#apply)
  - [compose](#compose)
  - [constFalse](#constfalse)
  - [constNull](#constnull)
  - [constTrue](#consttrue)
  - [constUndefined](#constundefined)
  - [constVoid](#constvoid)
  - [constant](#constant)
  - [decrement](#decrement)
  - [flip](#flip)
  - [flow](#flow)
  - [hole](#hole)
  - [identity](#identity)
  - [increment](#increment)
  - [pipe](#pipe)
  - [tupled](#tupled)
  - [unsafeCoerce](#unsafecoerce)
  - [untupled](#untupled)

---

# constructors

## id

**Signature**

```ts
export declare const id: <A>() => Endomorphism<A>
```

Added in v1.0.0

# instances

## Category

**Signature**

```ts
export declare const Category: category.Category<FunctionTypeLambda>
```

Added in v1.0.0

## Composable

**Signature**

```ts
export declare const Composable: composable.Composable<FunctionTypeLambda>
```

Added in v1.0.0

## getMonoid

Unary functions form a monoid as long as you can provide a monoid for the codomain.

**Signature**

```ts
export declare const getMonoid: <M>(Monoid: monoid.Monoid<M>) => <A>() => monoid.Monoid<(a: A) => M>
```

Added in v1.0.0

## getSemigroup

Unary functions form a semigroup as long as you can provide a semigroup for the codomain.

**Signature**

```ts
export declare const getSemigroup: <S>(Semigroup: semigroup.Semigroup<S>) => <A>() => semigroup.Semigroup<(a: A) => S>
```

Added in v1.0.0

# type lambdas

## FunctionTypeLambda (interface)

**Signature**

```ts
export interface FunctionTypeLambda extends TypeLambda {
  readonly type: (a: this['In1']) => this['Out1']
}
```

Added in v1.0.0

# utils

## FunctionN (interface)

**Signature**

```ts
export interface FunctionN<A extends ReadonlyArray<unknown>, B> {
  (...args: A): B
}
```

Added in v1.0.0

## LazyArg (interface)

A lazy argument

**Signature**

```ts
export interface LazyArg<A> {
  (): A
}
```

Added in v1.0.0

## SK

`SK` function (SKI combinator calculus).

**Signature**

```ts
export declare const SK: <A, B>(_: A, b: B) => B
```

Added in v1.0.0

## absurd

**Signature**

```ts
export declare const absurd: <A>(_: never) => A
```

Added in v1.0.0

## apply

**Signature**

```ts
export declare const apply: <A>(a: A) => <B>(f: (a: A) => B) => B
```

Added in v1.0.0

## compose

**Signature**

```ts
export declare const compose: <B, C>(bc: (b: B) => C) => <A>(ab: (a: A) => B) => (a: A) => C
```

Added in v1.0.0

## constFalse

A thunk that returns always `false`.

**Signature**

```ts
export declare const constFalse: LazyArg<boolean>
```

Added in v1.0.0

## constNull

A thunk that returns always `null`.

**Signature**

```ts
export declare const constNull: LazyArg<null>
```

Added in v1.0.0

## constTrue

A thunk that returns always `true`.

**Signature**

```ts
export declare const constTrue: LazyArg<boolean>
```

Added in v1.0.0

## constUndefined

A thunk that returns always `undefined`.

**Signature**

```ts
export declare const constUndefined: LazyArg<undefined>
```

Added in v1.0.0

## constVoid

A thunk that returns always `void`.

**Signature**

```ts
export declare const constVoid: LazyArg<void>
```

Added in v1.0.0

## constant

**Signature**

```ts
export declare const constant: <A>(a: A) => LazyArg<A>
```

Added in v1.0.0

## decrement

**Signature**

```ts
export declare const decrement: (n: number) => number
```

Added in v1.0.0

## flip

Flips the arguments of a curried function.

**Signature**

```ts
export declare const flip: <A, B, C>(f: (a: A) => (b: B) => C) => (b: B) => (a: A) => C
```

Added in v1.0.0

## flow

Performs left-to-right function composition. The first argument may have any arity, the remaining arguments must be unary.

**Signature**

```ts
export declare function flow<A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => B): (...a: A) => B
export declare function flow<A extends ReadonlyArray<unknown>, B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C
): (...a: A) => C
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D
): (...a: A) => D
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E
): (...a: A) => E
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): (...a: A) => F
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): (...a: A) => G
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): (...a: A) => H
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): (...a: A) => I
export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): (...a: A) => J
```

Added in v1.0.0

## hole

Type hole simulation

**Signature**

```ts
export declare const hole: <T>() => T
```

Added in v1.0.0

## identity

**Signature**

```ts
export declare const identity: <A>(a: A) => A
```

Added in v1.0.0

## increment

**Signature**

```ts
export declare const increment: (n: number) => number
```

Added in v1.0.0

## pipe

Pipes the value of an expression into a pipeline of functions.

**Signature**

```ts
export declare function pipe<A>(a: A): A
export declare function pipe<A, B>(a: A, ab: (a: A) => B): B
export declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
export declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
export declare function pipe<A, B, C, D, E>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): E
export declare function pipe<A, B, C, D, E, F>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): F
export declare function pipe<A, B, C, D, E, F, G>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): G
export declare function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): H
export declare function pipe<A, B, C, D, E, F, G, H, I>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): I
export declare function pipe<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): J
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K
): K
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L
): L
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M
): M
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N
): N
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O
): O
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P
): P
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q
): Q
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R
): R
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R,
  rs: (r: R) => S
): S
export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R,
  rs: (r: R) => S,
  st: (s: S) => T
): T
```

Added in v1.0.0

## tupled

Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.

**Signature**

```ts
export declare const tupled: <A extends readonly unknown[], B>(f: (...a: A) => B) => (a: A) => B
```

Added in v1.0.0

## unsafeCoerce

**Signature**

```ts
export declare const unsafeCoerce: <A, B>(a: A) => B
```

Added in v1.0.0

## untupled

Inverse function of `tupled`

**Signature**

```ts
export declare const untupled: <A extends readonly unknown[], B>(f: (a: A) => B) => (...a: A) => B
```

Added in v1.0.0