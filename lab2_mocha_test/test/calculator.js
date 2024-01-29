var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator Tests", () => {
  describe("Addition", () => {
    it("should test a pass addition", () => {
      const result = calculator.add(5, 2);
      expect(result).to.equal(7); // PASS
    });

    it("should test a fail addition", () => {
      const result = calculator.add(5, 2);
      expect(result, "The addition is incorrect").to.equal(8); // FAIL
    });
  });

  describe("Subtraction", () => {
    it("should test a pass subtraction", () => {
      const result = calculator.sub(5, 2);
      expect(result).to.equal(3); // PASS
    });

    it("should test a fail subtraction", () => {
      const result = calculator.sub(5, 2);
      expect(result, "The subtraction is incorrect").to.equal(5); // FAIL
    });
  });

  describe("Multiplication", () => {
    it("should test a success multiplication", () => {
      const result = calculator.mul(5, 2);
      expect(result).to.equal(10); // PASS
    });

    it("should test a failed multiplcation", () => {
      const result = calculator.mul(5, 0);
      expect(result, "The multiplication is incorect").to.equal(12); // FAIL
    });
  });

  describe("Division", () => {
    it("should test a pass divide", () => {
      const result = calculator.div(10, 2);
      expect(result).to.equal(5); // PASS
    });

    it("should test a fail divide", () => {
      const result = calculator.div(10, 2);
      expect(result, "The Division is incorrect").to.equal(2); // FAIL
    });
  });
});
