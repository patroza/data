import * as Equal from "@effect/data/Equal"
import * as Hash from "@effect/data/Hash"

export function makeEqualClass() {
  return class {
    static [Equal.symbol](_that: any) {
      return true
    }
    static [Hash.symbol]() {
      return 0
    }
  }
}

// fine
export class EqualTest1 extends makeEqualClass() {}
