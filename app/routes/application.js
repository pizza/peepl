import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    console.log('The model hook just ran!');
    return this.store.peekAll('person');
  }
}