import User from '../../user';

describe('User', function() {

  let user;
  let userParams = {
    email: 'john.doe@hell.com',
    firstName: 'John',
    lastName: 'Doe',
    dob: new Date('1990, December 6')
  };

  beforeEach(function() {
    user = new User(userParams);
  });

  it('can display fullName', function() {
    assert.strictEqual('John Doe', user.fullName);
  });

});
