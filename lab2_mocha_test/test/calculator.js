const { expect } = import('chai');
const calculator = import('../app/calculator');

describe('Calculator Tests', () => {
    it('should add two numbers', () => {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('should subtract two numbers', () => {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('should multiply two numbers', () => {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('should divide two numbers', () => {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    // Failing test cases
    it('should fail to add two numbers', () => {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    it('should fail to subtract two numbers', () => {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    it('should fail to multiply two numbers', () => {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    it('should fail to divide two numbers', () => {
        expect(calculator.div(10, 2)).to.equal(2);
    });
});