class Calculator {
  constructor() {
    unique.id = uuid.uuid();
  }
  #log = (value) => {
    console.log(`[Calculator :${unique.id}]:${value}`);
  };
  
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
