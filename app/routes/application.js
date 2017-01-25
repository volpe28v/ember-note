import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'note',
        attributes: {
          title: 'Fewer Moving Parts',
          body: 'David Bazan'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'note',
        attributes: {
          title: 'Calgary',
          body: 'Bon Iver'
        },
        relationships: {}
      }]
    });
  }
});
