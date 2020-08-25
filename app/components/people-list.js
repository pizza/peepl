import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @service store;

  @tracked nameFilter = '';

 get peopleCount() {
    return this.args.people.length;
  }

  get filteredPeople() {
    return this.args.people.filter(person => person.fullName.toLowerCase().includes(this.nameFilter.toLowerCase()));
  }

  @action createPerson() {
    this.store.createRecord('person', {
      firstName: this.nameFilter,
      lastName: 'created using button',
      birthday: '10/10/1990',
    });
  }
}