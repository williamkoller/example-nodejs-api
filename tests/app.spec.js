const request = require('supertest');
const app = require('../src/app');

describe('[GET]', () => {
  it('responds with hello world!', (done) => {
    request(app).get('/').expect('Hello My Friend!', done);
  });
});