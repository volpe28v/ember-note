import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {id: "1", title: "こんにちは", body: "暑いね"},
      {id: "2", title: "２つめのノート", body: "寒いね"},
    ];
  }
});
