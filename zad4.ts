class Pracownik {
  public imie: string;
  public nazwisko: string;
  public zarobki: number;
  public coRobi: string;

  constructor(
    imie: string,
    nazwisko: string,
    zarobki: number,
    coRobi: string = "pracuje"
  ) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.zarobki = zarobki;
    this.coRobi = coRobi;
  }
  pracuj() {
    return `Pracownik: ${this.coRobi}`;
  }
}

class Skrzypek extends Pracownik {
  constructor(imie: string, nazwisko: string, zarobki: number, coRobi: string) {
    super(imie, nazwisko, zarobki, coRobi);
  }
  pracuj() {
    return `Skrzypek: ${this.coRobi}`;
  }
}

class Ksiegowa extends Pracownik {
  constructor(imie: string, nazwisko: string, zarobki: number, coRobi: string) {
    super(imie, nazwisko, zarobki, coRobi);
  }
  pracuj() {
    return `Ksiegowa: ${this.coRobi}`;
  }
}

class Sprzedawca extends Pracownik {
  constructor(imie: string, nazwisko: string, zarobki: number, coRobi: string) {
    super(imie, nazwisko, zarobki, coRobi);
  }
  pracuj() {
    return `Sprzedawca: ${this.coRobi}`;
  }
}

const pracownik = new Pracownik("juzio", "kimono", 5000);
const skrzypek = new Skrzypek(
  "niccolo",
  "paganini",
  100000,
  "gra na skrzypkach"
);
const sprzedawca = new Sprzedawca(
  "Magda",
  "Nowak",
  1500,
  "Wydaje alkohol starszej osobie"
);
const ksiegowa = new Ksiegowa("Marcelina", "Dłutek", 4890, "Ksieguje faktury");

const listaPracownikow = [pracownik, skrzypek, sprzedawca, ksiegowa];

listaPracownikow.forEach((pracownik) => console.log(pracownik.pracuj()));
