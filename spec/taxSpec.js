const calculateTax = require('../src/tax');

describe("Tax Calculator Tests", () => {

    it("should return 0 tax for income <= 250000", () => {
        expect(calculateTax(200000)).toBe(0);
    });

    it("should return 5% tax", () => {
        expect(calculateTax(400000)).toBe(20000);
    });

    it("should return 20% tax", () => {
        expect(calculateTax(800000)).toBe(160000);
    });

    it("should return 30% tax", () => {
        expect(calculateTax(1500000)).toBe(450000);
    });

    it("should return 0 for exactly 250000", () => {
        expect(calculateTax(250000)).toBe(0);
    });

    it("should return correct tax for 500000", () => {
        expect(calculateTax(500000)).toBe(25000);
    });

    it("should return correct tax for 1000000", () => {
        expect(calculateTax(1000000)).toBe(200000);
    });

});