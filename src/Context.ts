/**
 * This module provides a data structure called `Context` that can be used for dependency injection in effectful
 * programs. It is essentially a table mapping `Tag`s to their implementations (called `Service`s), and can be used to
 * manage dependencies in a type-safe way. The `Context` data structure is essentially a way of providing access to a set
 * of related services that can be passed around as a single unit. This module provides functions to create, modify, and
 * query the contents of a `Context`, as well as a number of utility types for working with tags and services.
 *
 * @since 1.0.0
 */
import type { Equal } from "@effect/data/Equal"
import * as C from "@effect/data/internal/Context"
import type { Option } from "@effect/data/Option"

const TagTypeId: unique symbol = C.TagTypeId

/**
 * @since 1.0.0
 * @category symbol
 */
export type TagTypeId = typeof TagTypeId

/**
 * @since 1.0.0
 * @category models
 */
export interface Tag<Service> {
  readonly _id: TagTypeId
  readonly _S: (_: Service) => Service
}

/**
 * @since 1.0.0
 */
export declare namespace Tag {
  type Service<T extends Tag<any>> = T extends Tag<infer A> ? A : never
}

/**
 * Creates a new `Tag` instance with an optional key parameter.
 *
 * Specifying the `key` will make the `Tag` global, meaning two tags with the same
 * key will map to the same instance.
 *
 * Note: this is useful for cases where live reload can happen and it is
 * desireable to preserve the instance across reloads.
 *
 * @param key - An optional key that makes the `Tag` global.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * assert.strictEqual(Context.Tag() === Context.Tag(), false)
 * assert.strictEqual(Context.Tag("PORT") === Context.Tag("PORT"), true)
 *
 * @since 1.0.0
 * @category constructors
 */
export const Tag = <Service>(key?: unknown): Tag<Service> => new C.TagImpl(key)

const TypeId: unique symbol = C.ContextTypeId as TypeId

/**
 * @since 1.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 1.0.0
 * @category models
 */
export type Tags<R> = R extends infer S ? Tag<S> : never

/**
 * @since 1.0.0
 * @category models
 */
export interface Context<Services> extends Equal {
  readonly _id: TypeId
  readonly _S: (_: Services) => unknown
  /** @internal */
  readonly unsafeMap: Map<Tag<any>, any>
}

/**
 * Checks if the provided argument is a `Context`.
 *
 * @param input - The value to be checked if it is a `Context`.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * assert.strictEqual(Context.isContext(Context.empty()), true)
 *
 * @since 1.0.0
 * @category guards
 */
export const isContext: (input: unknown) => input is Context<never> = C.isContext

/**
 * Checks if the provided argument is a `Tag`.
 *
 * @param input - The value to be checked if it is a `Tag`.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * assert.strictEqual(Context.isTag(Context.Tag()), true)
 *
 * @since 1.0.0
 * @category guards
 */
export const isTag: (input: unknown) => input is Tag<never> = C.isTag

/**
 * Returns an empty `Context`.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * assert.strictEqual(Context.isContext(Context.empty()), true)
 *
 * @since 1.0.0
 * @category constructors
 */
export const empty: () => Context<never> = C.empty

/**
 * Creates a new `Context` with a single service associated to the tag.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 *
 * @since 1.0.0
 * @category constructors
 */
export const make: <T extends Tag<any>>(
  tag: T,
  service: Tag.Service<T>
) => Context<Tag.Service<T>> = C.make

/**
 * Adds a service to a given `Context`.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 * import { pipe } from "@effect/data/Function"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const someContext = Context.make(Port, { PORT: 8080 })
 *
 * const Services = pipe(
 *   someContext,
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 *
 * @since 1.0.0
 * @category mutations
 */
export const add: {
  <T extends Tag<any>>(
    tag: T,
    service: Tag.Service<T>
  ): <Services>(self: Context<Services>) => Context<Tag.Service<T> | Services>
  <Services, T extends Tag<any>>(
    self: Context<Services>,
    tag: Tag<T>,
    service: Tag.Service<T>
  ): Context<Services | Tag.Service<T>>
} = C.add

/**
 * Get a service from the context that corresponds to the given tag.
 *
 * @param self - The `Context` to search for the service.
 * @param tag - The `Tag` of the service to retrieve.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 * import { pipe } from "@effect/data/Function"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const Services = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 *
 * @since 1.0.0
 * @category getters
 */
export const get: {
  <Services, T extends Tags<Services>>(tag: T): (self: Context<Services>) => T extends Tag<infer S> ? S : never
  <Services, T extends Tags<Services>>(self: Context<Services>, tag: T): T extends Tag<infer S> ? S : never
} = C.get

/**
 * Get a service from the context that corresponds to the given tag.
 * This function is unsafe because if the tag is not present in the context, a runtime error will be thrown.
 *
 * For a safer version see {@link getOption}.
 *
 * @param self - The `Context` to search for the service.
 * @param tag - The `Tag` of the service to retrieve.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.unsafeGet(Services, Port), { PORT: 8080 })
 * assert.throws(() => Context.unsafeGet(Services, Timeout))
 *
 * @since 1.0.0
 * @category unsafe
 */
export const unsafeGet: {
  <S>(tag: Tag<S>): <Services>(self: Context<Services>) => S
  <Services, S>(self: Context<Services>, tag: Tag<S>): S
} = C.unsafeGet

/**
 * Get the value associated with the specified tag from the context wrapped in an `Option` object. If the tag is not
 * found, the `Option` object will be `None`.
 *
 * @param self - The `Context` to search for the service.
 * @param tag - The `Tag` of the service to retrieve.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 * import * as O from "@effect/data/Option"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const Services = Context.make(Port, { PORT: 8080 })
 *
 * assert.deepStrictEqual(Context.getOption(Services, Port), O.some({ PORT: 8080 }))
 * assert.deepStrictEqual(Context.getOption(Services, Timeout), O.none())
 *
 * @since 1.0.0
 * @category getters
 */
export const getOption: {
  <S>(tag: Tag<S>): <Services>(self: Context<Services>) => Option<S>
  <Services, S>(self: Context<Services>, tag: Tag<S>): Option<S>
} = C.getOption

/**
 * Merges two `Context`s, returning a new `Context` containing the services of both.
 *
 * @param self - The first `Context` to merge.
 * @param that - The second `Context` to merge.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const firstContext = Context.make(Port, { PORT: 8080 })
 * const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
 *
 * const Services = Context.merge(firstContext, secondContext)
 *
 * assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
 * assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
 *
 * @since 1.0.0
 * @category mutations
 */
export const merge: {
  <R1>(that: Context<R1>): <Services>(self: Context<Services>) => Context<R1 | Services>
  <Services, R1>(self: Context<Services>, that: Context<R1>): Context<Services | R1>
} = C.merge

/**
 * Returns a new `Context` that contains only the specified services.
 *
 * @param self - The `Context` to prune services from.
 * @param tags - The list of `Tag`s to be included in the new `Context`.
 *
 * @example
 * import * as Context from "@effect/data/Context"
 * import { pipe } from "@effect/data/Function"
 * import * as O from "@effect/data/Option"
 *
 * const Port = Context.Tag<{ PORT: number }>()
 * const Timeout = Context.Tag<{ TIMEOUT: number }>()
 *
 * const someContext = pipe(
 *   Context.make(Port, { PORT: 8080 }),
 *   Context.add(Timeout, { TIMEOUT: 5000 })
 * )
 *
 * const Services = pipe(someContext, Context.pick(Port))
 *
 * assert.deepStrictEqual(Context.getOption(Services, Port), O.some({ PORT: 8080 }))
 * assert.deepStrictEqual(Context.getOption(Services, Timeout), O.none())
 *
 * @since 1.0.0
 * @category mutations
 */
export const pick: <Services, S extends Array<Tags<Services>>>(
  ...tags: S
) => (self: Context<Services>) => Context<{ [k in keyof S]: Tag.Service<S[k]> }[number]> = C.pick
