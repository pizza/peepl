import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @service store;

  @tracked nameFilter = '';

  constructor() {
    super(...arguments);
    this.store.createRecord('person', {
      firstName: 'John',
      lastName: 'Doe',
      birthday: '10/10/1990',
    });
  }

  get filteredPeople() {
    return this.args.people.filter(person => person.fullName.toLowerCase().includes(this.nameFilter.toLowerCase()));
  }

  @action createPerson() {
    this.store.createRecord('person', {
      firstName: this.nameFilter,
      lastName: 'Something',
      birthday: '10/10/1990',
    });
  }
}