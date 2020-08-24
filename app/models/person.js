import Model, { attr } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr birthday;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
