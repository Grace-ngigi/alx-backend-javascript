// api.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index Page', () => {
  it('should return correct status code for the index page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return correct result for the index page', (done) => {
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

describe('Cart Page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request(app)
      .get('/cart/123')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return correct result when :id is a number', (done) => {
    request(app)
      .get('/cart/123')
      .expect('Payment methods for cart 123')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request(app)
      .get('/cart/nonnumeric')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  // Add more tests if needed
});
