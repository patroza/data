import { makeClass, Test1 } from "@effect/data/test/Equal1"

// fine
export class Test3 extends Test1 {}

// bad
// 'extends' clause of exported class 'Test2' has or is using private name ''
// 'extends' clause of exported class 'Test2' has or is using private name 'Hash'
export class Test2 extends makeClass() {}
