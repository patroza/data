export const s = Symbol()

export function makeClass() {
  return class {
    static [s]() {
      return true
    }
  }
}

// fine
export class Test1 extends makeClass() {}
