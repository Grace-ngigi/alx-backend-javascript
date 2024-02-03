// 10-api/api.test.js
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

// New test suite for /available_payments endpoint
describe('/available_payments Endpoint', () => {
  it('should return correct status code and result', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);

        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(res.body).to.deep.equal(expectedResponse);
        done();
      });
  });
});

// New test suite for /login endpoint
describe('/login Endpoint', () => {
  it('should return correct status code and result', (done) => {
    const userName = 'JohnDoe';

    request(app)
      .post('/login')
      .send({ userName })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.text).to.equal(`Welcome ${userName}`);
        done();
      });
  });
});
