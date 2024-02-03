const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    // Act
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done); // Fail the test if an error occurs
  });

  it('should not resolve when success is false', (done) => {
    // Act
    getPaymentTokenFromAPI(false)
      .then(() => {
        // This block should not be executed when success is false
        done(new Error('Test failed: Promise should not resolve'));
      })
      .catch(() => {
        // Assert
        // Ensure that the promise is rejected when success is false
        done();
      });
  });
});
