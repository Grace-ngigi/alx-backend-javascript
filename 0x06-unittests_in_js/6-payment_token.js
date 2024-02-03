// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
    if (success) {
      return Promise.resolve({ data: 'Successful response from the API' });
    } else {
      // If success is false, do nothing (no promise returned)
    }
  }
  
  module.exports = getPaymentTokenFromAPI;
  