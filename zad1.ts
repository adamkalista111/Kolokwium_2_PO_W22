type TypTrasy = 0.8 | 1 | 1.3;

class Samochod {
  private pojemnoscSilnika: number;
  private nrVin: string;
  public rocznik: number;
  public nazwa: string;
  public srednieSpalanie: number;

  private constructor(
    pojemnoscSilnika: number,
    nrVin: string,
    rocznik: number,
    nazwa: string,
    srednieSpalanie: number
  ) {
    this.pojemnoscSilnika = pojemnoscSilnika;
    this.nrVin = nrVin;
    this.rocznik = rocznik;
    this.nazwa = nazwa;
    this.srednieSpalanie = srednieSpalanie;
  }

  public static create(
    pojemnoscSilnika: number,
    nrVin: string,
    rocznik: number,
    nazwa: string,
    srednieSpalanie: number
  ) {
    return new Samochod(
      pojemnoscSilnika,
      nrVin,
      rocznik,
      nazwa,
      srednieSpalanie
    );
  }

  getSrednieSpalanie() {
    return this.srednieSpalanie;
  }

  obliczSpalanie(dlugoscTrasy: number, typTrasy: TypTrasy) {
    return this.srednieSpalanie * dlugoscTrasy * typTrasy;
  }
}

const ford = Samochod.create(5, "1525125", 2000, "ford", 4.6);
const audi = Samochod.create(6.11, "651616", 1955, "audi", 9.15);

console.log(ford.obliczSpalanie(15, 0.8));
