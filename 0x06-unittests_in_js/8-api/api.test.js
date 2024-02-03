const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index Page', () => {
  it('should return correct status code', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return correct result', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  // Add more tests if needed
});
