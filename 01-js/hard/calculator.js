/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add (num) {
    this.result += num;
  }

  subtract (num) {
    this.result -= num;
  }

  multiply (num) {
    this.result *= num;
  }

  divide (num) {
    if (num === 0) {
      throw new Error('Cannot divide by 0');
    }
    this.result /= num;
  }

  clear (num) {
    this.result = 0;
  }

  getResult () {
    return this.result;
  }

  calculate (input) {
    input = this.tokenize(input);
    input = this.convertToRPN(input);
    this.result = this.evaluateRPN(input);
    return this.result;
  }

  tokenize (input) {
    input = input.replace(/\s+/g, '');
    if (
      input.match(/[^0-9\+\-\*\/\(\)\.]/g)
    ) {
      throw new Error('Incorrect input');
    }
    const regex = /([\d.]+|\+|\-|\*|\/|\(|\))/g;
    return input.match(regex);
  }

  convertToRPN (input) {
    // Convert from infix to postfix notation
    // Use the shunting yard algorithm
    const operatorStack = [];
    const outputQueue = [];
    const isOperator = token => ['+', '-', '*', '/'].includes(token);
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    input.forEach(token => {
      if (isOperator(token)) {
        while (
          operatorStack.length &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          outputQueue.push(operatorStack.pop());
        }

        operatorStack.push(token);
      } else if (token == '(') {
        operatorStack.push(token);
      } else if (token == ')') {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] != '('
        ) {
          outputQueue.push(operatorStack.pop());
        }

        if (!operatorStack.length) {
          throw new Error('Incorrect Input');
        }

        operatorStack.pop();
      } else {
        outputQueue.push(token);
      }
    });

    if (operatorStack.includes('(')) {
      throw new Error('Incorrect Input');
    }

    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
  }

  evaluateRPN (input) {
    const stack = [];

    input.forEach(token => {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();

        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;  
          case '/':
            if (b === 0) {
              throw new Error('Divison by 0 not allowed');
            }
            stack.push(a / b);
            break;
        }
      }
    });

    return stack.pop();
  }
}

module.exports = Calculator;
