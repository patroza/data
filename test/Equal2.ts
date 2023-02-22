import { makeEqualClass } from "@effect/data/test/Equal1"

// bad
// 'extends' clause of exported class 'EqualTest2' has or is using private name 'Equal'
// 'extends' clause of exported class 'EqualTest2' has or is using private name 'Hash'
export class EqualTest2 extends makeEqualClass() {}
