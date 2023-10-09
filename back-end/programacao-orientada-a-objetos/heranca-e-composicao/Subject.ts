// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
  constructor(private _name: string){}
  getName(): string {
    return this._name;
  }
  setName(name: string): void {
    this.validateName(name);
    this._name = name;
  }
  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('Invalid name! Must have at least 3 characters!');
    }
  }
}