 class Program {
  getType(a: string): string;
  getType(a: number): string;
  getType(a: boolean): string;
  getType(a: number, b: string): string;
  getType(a: number, b: number, c: boolean): string;
  getType(
    a: string | number | boolean,
    b?: string | number,
    c?: boolean
  ): string {
    if (b !== undefined) {
      if (c !== undefined) return `${typeof a} ${typeof b} ${typeof c}`;
      else return `${typeof a} ${typeof b}`;
    } else return `${typeof a}`;
  }
}

const test = new Program();

console.log(test.getType("test"));
console.log(test.getType(5));
console.log(test.getType(true));
console.log(test.getType(5, "test"));
console.log(test.getType(6, 7, false));

// tak nie działa np:
// console.log(test.getType(6, "test", false));