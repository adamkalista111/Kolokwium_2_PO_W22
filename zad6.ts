class Punkt {
  public x: number;
  public y: number;
  public nazwa: string;
  constructor(nazwa: string, x: number, y: number) {
    this.nazwa = nazwa;
    this.x = x;
    this.y = y;
  }
}

class Kolo {
  public srodekKola: Punkt;
  public promien: number;
  public nazwa: string;
  constructor(nazwa: string, srodekKola: Punkt, promien: number) {
    this.nazwa = nazwa;
    this.srodekKola = srodekKola;
    this.promien = promien;
  }
}

class Kwadrat {
  public x1: Punkt;
  public x2: Punkt;
  public x3: Punkt;
  public x4: Punkt;
  public nazwa: string;
  constructor(nazwa: string, x1: Punkt, x2: Punkt, x3: Punkt, x4: Punkt) {
    this.nazwa = nazwa;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;
  }
}
