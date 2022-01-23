class DivideByZeroException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, DivideByZeroException.prototype);
  }

  info() {
    return `test: ${this.message}`;
  }
}

function nieZero(n: number) {
  n = +n;
  if (!n) {
    throw new Error("Nie można dzielić przez 0!");
  }
  return n;
}

const error = new DivideByZeroException("Nie można dzielić przez 0!");

class Kalkulator {
  dodawanie(a: number, b: number) {
    return a + b;
  }
  odejmowanie(a: number, b: number) {
    return a - b;
  }
  dzielenie(a: number, b: number) {
    try {
      nieZero(b);
      return a / b;
    } catch (e) {
      console.log(error);
    }
  }
  mnozenie(a: number, b: number) {
    return a * b;
  }
}

class DziwnyKalkulator extends Kalkulator {
  dodawanieMod26(a: number, b: number) {
    return this.dodawanie(a, b) % 26;
  }
  pierwiastkowanie(n: number, root: number) {
    return Math.pow(n, 1 / root);
  }
  potrojneDodawanie(a: number, b: number, c: number) {
    return this.dodawanie(this.dodawanie(a, b), c);
  }
}

const dziwnyKalkulator = new DziwnyKalkulator();
console.log(dziwnyKalkulator.dzielenie(6, 0));
console.log(dziwnyKalkulator.dodawanieMod26(1, 26));
console.log(dziwnyKalkulator.pierwiastkowanie(5, 1));
console.log(dziwnyKalkulator.potrojneDodawanie(5, 5, 6));
