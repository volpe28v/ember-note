import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.modelFor("notes").findBy("id", params.id);
  }
});
