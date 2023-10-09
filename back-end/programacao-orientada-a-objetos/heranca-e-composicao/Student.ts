import Person from "./Person";

export default class Student extends Person {
  private enrollment: string = this.generateEnrollment(12);
  constructor(
    name: string,
    birthDate: Date,
    private _examsGrade: number[] = [],
    private _assignmentsGrade: number[] = [],
  ){
    super(name, birthDate);
    this.validateGrades();
  }
  getEnrollment(): string {
    return this.enrollment;
  }
  getExamsGrade(): number[] {
    return this._examsGrade;
  }
  getAssignmentsGrade(): number[] {
    return this._assignmentsGrade;
  }
  setEnrollment(enrollment: string): void {
    this.validateEnrollment(enrollment);
    this.enrollment = enrollment;
  }
  setExamsGrade(examsGrade: number[]): void {
    this.validateExamsGrade(examsGrade);
    this._examsGrade = examsGrade;
  }
  setAssignmentsGrade(assignmentsGrade: number[]): void {
    this.validateAssignmentsGrade(assignmentsGrade);
    this._assignmentsGrade = assignmentsGrade;
  }
  sumGrades(): number {
    const examsGradeSum = this._examsGrade.reduce((acc, curr) => acc + curr, 0);
    const assignmentsGradeSum = this._assignmentsGrade.reduce((acc, curr) => acc + curr, 0);
    return examsGradeSum + assignmentsGradeSum;
  }
  sumAverageGrade(): number {
    return this.sumGrades() / (this._examsGrade.length + this._assignmentsGrade.length);
  }
  generateEnrollment(length: number): string {
    let randomNumber = '';
    for (let i = 0; i < length; i += 1) {
      const digit = Math.floor(Math.random() * 10);
      randomNumber += digit.toString();
    }
    return new Date().getFullYear().toString() + randomNumber;
  }
  private validateExamsGrade(grades: number[]): void {
    if (grades.length > 4) {
      throw new Error('Invalid grade! Must have 4 exams grades!');
    }
  }
  private validateAssignmentsGrade(grades: number[]): void {
    if (grades.length > 2) {
      throw new Error('Invalid grade! Must have 2 assignments grades!');
    }
  }
  private validateEnrollment(enrollment: string): void {
    if (enrollment.length !== 16) {
      throw new Error('Invalid enrollment. Must have 16 characters!');
    }
  }
  validateGrades(): void {
    this.validateExamsGrade(this._examsGrade);
    this.validateAssignmentsGrade(this._assignmentsGrade);
  }
}

const student = new Student('John Doe', new Date('1990-01-01'));
console.log(student);
