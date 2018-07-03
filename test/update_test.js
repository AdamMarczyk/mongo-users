const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach(done => {
    joe = new User({ name: 'Joe', postCount: 0 });
    joe.save().then(() => done());
  });

  it('instance type using set n save', done => {
    joe.set('name', 'Alex');
    joe
      .save()
      .then(() => User.find({}))
      .then(users => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  });

  it('A user can have their postcount incremented by 1', done => {
    User.update({ name: 'Joe' }, { $inc: { postCount: 1 } }).then(() => {
      User.findOne({ name: 'Joe' }).then(user => {
        assert(user.postCount === 1);
        done();
      });
    });
  });
});
