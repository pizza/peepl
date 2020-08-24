import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class CounterComponent extends Component {
  @tracked nameFilter = '';
  @tracked people = A(['Karim', 'Nicolas']);

  get filteredPeople() {
    return this.people.filter(name => name.includes(this.nameFilter));
  }

  @action createPerson() {
    this.people.pushObject(this.nameFilter);
  }
}