import { tracked } from '@glimmer/tracking';

export default class PersonModel{
  @tracked firstName;
  @tracked lastName;
  @tracked birthday;

  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
