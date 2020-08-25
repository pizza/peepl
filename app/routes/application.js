import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
     this.store.createRecord('person', {
      firstName: 'John',
      lastName: 'created in application.js',
      birthday: '10/10/1990',
    });

    return this.store.peekAll('person');
  }
}