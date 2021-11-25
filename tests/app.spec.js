const app = require('../src/app');
const request = require('supertest');

describe('[GET]', () => {
  it('should be responds with hello world!', (done) => {
    request(app).get('/').expect('Hello World!', done);
  });

  it('should be return object', (done) => {
    request(app).get('/name').expect({ name: 'William' }, done);
  });
});