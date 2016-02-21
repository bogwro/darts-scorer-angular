export default class User {
  constructor(params) {
    this._email = params.email;
    this._firstName = params.firstName;
    this._lastName = params.lastName;
    this._dob = params.dob;
  }

  get email() {
    return this._email;
  }

  set email(val) {
    this._email = val;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  daysOnEarth() {

  }



}