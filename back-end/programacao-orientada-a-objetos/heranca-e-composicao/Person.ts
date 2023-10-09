export default class Person {
  constructor(
    private name: string,
    private birthDate: Date,
  ){
    this.validatePerson();
  }
  getName(): string {
    return this.name;
  }
  getBirthDate(): Date {
    return this.birthDate;
  }
  
  setName(name: string): void {
    this.name = name;
  }
  setBirthDate(birthDate: Date): void {
    this.birthDate = birthDate;
  }

  private validateName(name: string): void {
    if (name || name.length < 3) {
      throw new Error('Invalid name!');
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('Invalid birth date!');
    }
    const yearMs = 31_536_000_000; 
    const now = new Date();
    const age = Math.abs((now.getTime() - date.getTime()) / yearMs);
    if (age > 120) {
      throw new Error('Invalid birth date!');
    }
  }

  validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}


const person = new Person('John Doe', new Date('1990-01-01'));
console.log(person.getName());
console.log(person.getBirthDate());
// person.setBirthDate(new Date('1790-01-01'));
const yearMs = 31_536_000_000; 
console.log(yearMs, typeof yearMs);