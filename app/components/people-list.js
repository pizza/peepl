import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';
import PersonModel from '../models/person';

export default class CounterComponent extends Component {
  @tracked nameFilter = '';
  @tracked people = A([]);

  constructor() {
    super(...arguments);
    this.people.pushObject(new PersonModel('Karim', 'Frenn', '13/10/1992'));
  }

  get filteredPeople() {
    return this.people.filter(person => person.fullName.toLowerCase().includes(this.nameFilter.toLowerCase()));
  }

  @action createPerson() {
    this.people.pushObject(new PersonModel(this.nameFilter, 'Frenn', '13/10/1992'));
  }
}