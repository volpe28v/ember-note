export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  this.get('/notes', () => {
    return {
      data: [
        {
          type: 'notes',
          id: 10,
          attributes:{
            title: 'mirage1',
            body: 'mirage body'
          }
        },
        {
          type: 'notes',
          id: 11,
          attributes:{
            title: 'mirage2',
            body: 'mirage body'
          }
        },
        {
          type: 'notes',
          id: 12,
          attributes:{
            title: 'mirage3',
            body: 'mirage body'
          }
        },
      ]
    };
  });

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
