---
title: Duration.ts
nav_order: 13
parent: Modules
---

## Duration overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [days](#days)
  - [hours](#hours)
  - [infinity](#infinity)
  - [millis](#millis)
  - [minutes](#minutes)
  - [seconds](#seconds)
  - [weeks](#weeks)
  - [zero](#zero)
- [guards](#guards)
  - [isDuration](#isduration)
- [instances](#instances)
  - [Bounded](#bounded)
  - [Equivalence](#equivalence)
  - [MonoidMax](#monoidmax)
  - [MonoidMin](#monoidmin)
  - [MonoidSum](#monoidsum)
  - [Order](#order)
  - [SemigroupMax](#semigroupmax)
  - [SemigroupMin](#semigroupmin)
  - [SemigroupSum](#semigroupsum)
- [math](#math)
  - [subtract](#subtract)
  - [sum](#sum)
  - [sumAll](#sumall)
  - [times](#times)
- [models](#models)
  - [Duration (interface)](#duration-interface)
- [predicates](#predicates)
  - [between](#between)
  - [equals](#equals)
  - [greaterThan](#greaterthan)
  - [greaterThanOrEqualTo](#greaterthanorequalto)
  - [lessThan](#lessthan)
  - [lessThanOrEqualTo](#lessthanorequalto)
- [symbol](#symbol)
  - [TypeId (type alias)](#typeid-type-alias)
- [utils](#utils)
  - [clamp](#clamp)
  - [max](#max)
  - [min](#min)

---

# constructors

## days

**Signature**

```ts
export declare const days: (days: number) => Duration
```

Added in v1.0.0

## hours

**Signature**

```ts
export declare const hours: (hours: number) => Duration
```

Added in v1.0.0

## infinity

**Signature**

```ts
export declare const infinity: Duration
```

Added in v1.0.0

## millis

**Signature**

```ts
export declare const millis: (millis: number) => Duration
```

Added in v1.0.0

## minutes

**Signature**

```ts
export declare const minutes: (minutes: number) => Duration
```

Added in v1.0.0

## seconds

**Signature**

```ts
export declare const seconds: (seconds: number) => Duration
```

Added in v1.0.0

## weeks

**Signature**

```ts
export declare const weeks: (weeks: number) => Duration
```

Added in v1.0.0

## zero

**Signature**

```ts
export declare const zero: Duration
```

Added in v1.0.0

# guards

## isDuration

**Signature**

```ts
export declare const isDuration: (u: unknown) => u is Duration
```

Added in v1.0.0

# instances

## Bounded

**Signature**

```ts
export declare const Bounded: bounded.Bounded<Duration>
```

Added in v1.0.0

## Equivalence

**Signature**

```ts
export declare const Equivalence: equivalence.Equivalence<Duration>
```

Added in v1.0.0

## MonoidMax

**Signature**

```ts
export declare const MonoidMax: monoid.Monoid<Duration>
```

Added in v1.0.0

## MonoidMin

**Signature**

```ts
export declare const MonoidMin: monoid.Monoid<Duration>
```

Added in v1.0.0

## MonoidSum

**Signature**

```ts
export declare const MonoidSum: monoid.Monoid<Duration>
```

Added in v1.0.0

## Order

**Signature**

```ts
export declare const Order: order.Order<Duration>
```

Added in v1.0.0

## SemigroupMax

**Signature**

```ts
export declare const SemigroupMax: semigroup.Semigroup<Duration>
```

Added in v1.0.0

## SemigroupMin

**Signature**

```ts
export declare const SemigroupMin: semigroup.Semigroup<Duration>
```

Added in v1.0.0

## SemigroupSum

**Signature**

```ts
export declare const SemigroupSum: semigroup.Semigroup<Duration>
```

Added in v1.0.0

# math

## subtract

**Signature**

```ts
export declare const subtract: {
  (that: Duration): (self: Duration) => Duration
  (self: Duration, that: Duration): Duration
}
```

Added in v1.0.0

## sum

**Signature**

```ts
export declare const sum: { (that: Duration): (self: Duration) => Duration; (self: Duration, that: Duration): Duration }
```

Added in v1.0.0

## sumAll

**Signature**

```ts
export declare const sumAll: (collection: Iterable<Duration>) => Duration
```

Added in v1.0.15

## times

**Signature**

```ts
export declare const times: { (times: number): (self: Duration) => Duration; (self: Duration, times: number): Duration }
```

Added in v1.0.0

# models

## Duration (interface)

**Signature**

```ts
export interface Duration {
  readonly _id: TypeId
  readonly millis: number
}
```

Added in v1.0.0

# predicates

## between

Checks if a `Duration` is between a `minimum` and `maximum` value.

**Signature**

```ts
export declare const between: {
  (minimum: Duration, maximum: Duration): (self: Duration) => boolean
  (self: Duration, minimum: Duration, maximum: Duration): boolean
}
```

Added in v1.0.0

## equals

**Signature**

```ts
export declare const equals: {
  (that: Duration): (self: Duration) => boolean
  (self: Duration, that: Duration): boolean
}
```

Added in v1.0.0

## greaterThan

**Signature**

```ts
export declare const greaterThan: {
  (that: Duration): (self: Duration) => boolean
  (self: Duration, that: Duration): boolean
}
```

Added in v1.0.0

## greaterThanOrEqualTo

**Signature**

```ts
export declare const greaterThanOrEqualTo: {
  (self: Duration, that: Duration): boolean
  (that: Duration): (self: Duration) => boolean
}
```

Added in v1.0.0

## lessThan

**Signature**

```ts
export declare const lessThan: {
  (that: Duration): (self: Duration) => boolean
  (self: Duration, that: Duration): boolean
}
```

Added in v1.0.0

## lessThanOrEqualTo

**Signature**

```ts
export declare const lessThanOrEqualTo: {
  (self: Duration, that: Duration): boolean
  (that: Duration): (self: Duration) => boolean
}
```

Added in v1.0.0

# symbol

## TypeId (type alias)

**Signature**

```ts
export type TypeId = typeof TypeId
```

Added in v1.0.0

# utils

## clamp

**Signature**

```ts
export declare const clamp: {
  (minimum: Duration, maximum: Duration): (self: Duration) => Duration
  (self: Duration, minimum: Duration, maximum: Duration): Duration
}
```

Added in v1.0.0

## max

**Signature**

```ts
export declare const max: { (that: Duration): (self: Duration) => Duration; (self: Duration, that: Duration): Duration }
```

Added in v1.0.0

## min

**Signature**

```ts
export declare const min: { (that: Duration): (self: Duration) => Duration; (self: Duration, that: Duration): Duration }
```

Added in v1.0.0
