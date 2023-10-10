// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string = this.generateRegistration();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject,
  ){
    super(name, birthDate);

    this._subject = subject;
    this._admissionDate = new Date();
    this._salary = _salary;

    this.validateTeacher();

    }
  
  getSubject(): Subject {
    return this._subject;
  }
  get registration(): string {
    return this._registration;
  }
  get salary(): number {
    return this._salary;
  }
  get admissionDate(): Date {
    return this._admissionDate;
  }
  setSubject(subject: Subject): void {
    this._subject = subject;
  }
  set registration(registration: string) {
    this.validateRegistration(registration);
    this._registration = registration;
  }
  set salary(salary: number) {
    this.validateSalary(salary);
    this._salary = salary;
  }
  set admissionDate(admissionDate: Date) {
    this.validateAdmissionDate(admissionDate);
    this._admissionDate = admissionDate;
  }
  validateRegistration(registration: string): void {
    if (registration.length < 16) {
      throw new Error('Invalid registration! Must have at least 16 characters!');
    }
  }
  validateSalary(salary: number): void {
    if (salary < 0) {
      throw new Error('Invalid salary! Must be positive!');
    }
  }
  validateAdmissionDate(admissionDate: Date): void {
    if (admissionDate.getTime() > new Date().getTime()) {
      throw new Error('Invalid admission date! Future dates are not allowed!');
    }
  }
  
  
  generateRegistration(): string {
    let randomNumber = '';
    for (let i = 0; i < 12; i += 1) {
      const digit = Math.floor(Math.random() * 10);
      randomNumber += digit.toString();
    }
    return new Date().getFullYear().toString() + randomNumber;
  }
  validateTeacher(): void {
    this.validateRegistration(this._registration);
    this.validateSalary(this._salary);
    this.validateAdmissionDate(this._admissionDate);
  }
}
