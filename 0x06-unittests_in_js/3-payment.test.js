const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and display the result', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Ensure that the correct message is displayed in the console
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    // Clean up
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
