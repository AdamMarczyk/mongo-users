const assert = require('assert');
const User = require('../src/user');

describe('Creating records', done => {
  it('saves a user', () => {
    const joe = new User({ name: 'Joe' });

    joe.save().then(() => {
      assert(!joe.isNew);
      done();
    });
  });
});
