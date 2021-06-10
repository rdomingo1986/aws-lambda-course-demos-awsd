var calculator = require('calculator');

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: {
            Add: calculator.Add(event.num1, event.num2),
            Subtract: calculator.Subtract(event.num1, event.num2),
            Multiply: calculator.Multiply(event.num1, event.num2),
            Divide: calculator.Divide(event.num1, event.num2)
        },
    };
    callback(null, response);
};
