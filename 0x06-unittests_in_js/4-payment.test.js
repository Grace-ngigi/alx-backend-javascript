// 4-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and log the correct message', () => {
    // Arrange
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    // Verify that the stub is being called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Ensure that the correct message is displayed in the console
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Clean up
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
