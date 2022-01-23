interface IOsoba {
  imie: string;
  nazwisko: string;
  opisz(): string;
}

class Student implements IOsoba {
  public imie: string;
  public nazwisko: string;
  constructor(imie: string, nazwisko: string) {
    this.imie = imie;
    this.nazwisko = nazwisko;
  }
  public opisz(): string {
    return `${this.imie} ${this.nazwisko}`;
  }
}

const student1 = new Student("adam", "kalista");
const student2 = new Student("juzio", "kartofelek");
const student3 = new Student("alan", "ramen");
const studnet4 = new Student("patryk", "vegeta");
const student5 = new Student("alicja", "krzywousta");

const arrayList = [student1, student2, student3, studnet4, student5];

const sortedArrayList = arrayList.sort((a, b) =>
  a.opisz().split(" ")[0].localeCompare(b.opisz().split(" ")[0])
);

console.log(sortedArrayList);
