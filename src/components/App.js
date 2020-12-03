const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      sum: undefined
    });
    return;
  }
  if (parseFloat(num1) < -1000000 || parseFloat(num2) < -1000000) {
    res.send({
      status: "error",
      message: "underflow",
      sum: undefined
    });
    return;
  }
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    let sum = parseFloat(num1) + parseFloat(num2);
    if (sum < 1000000) {
      res.send({
        status: "success",
        message: "the sum of given two numbers",
        sum: sum
      });
      return;
    } else {
      res.send({
        status: "error",
        message: "Overflow",
        sum: undefined
      });
      return;
    }
  } else if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      sum: undefined
    });
    return;
  }
});
app.post("/sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      difference: undefined
    });
    return;
  }
  if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
    res.send({
      status: "Error",
      message: "Overflow",
      difference: undefined
    });
    return;
  }
  if (parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000) {
    res.send({
      status: "Error",
      message: "Underflow",
      difference: undefined
    });
    return;
  }
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num1))) {
    res.send({
      status: "success",
      message: "the difference of given two numbers",
      difference: parseFloat(num1) - parseFloat(num2)
    });
  }
});
//multiply
app.post("/multiply", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      result: undefined
    });
    return;
  }
  if (parseFloat(num1) < -1000000 || parseFloat(num2) < -1000000) {
    res.send({
      status: "error",
      message: "underflow",
      result: undefined
    });
    return;
  }
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    let result = parseFloat(num1) * parseFloat(num2);
    if (result < 1000000) {
      res.send({
        status: "success",
        message: "The product of given numbers",
        result: result
      });
      return;
    } else {
      res.send({
        status: "error",
        message: "Overflow",
        result: undefined
      });
      return;
    }
  }
  if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      result: undefined
    });
    return;
  }
});
app.post("/divide", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
    res.send({
      status: "error",
      message: "Overflow",
      result: undefined
    });
    return;
  }
  if (parseFloat(num1) < -1000000 || parseFloat(num2) < -1000000) {
    res.send({
      status: "error",
      message: "underflow",
      result: undefined
    });
    return;
  }
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    if (num2 === 0) {
      res.send({
        status: "error",
        message: "Cannot divide by zero",
        result: undefined
      });
      return;
    } else {
      res.send({
        status: "success",
        message: "The division of given numbers",
        result: parseFloat(num1) / parseFloat(num2)
      });
      return;
    }
  }
  if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    res.send({
      status: "failure",
      message: "Invalid data types",
      result: undefined
    });
    return;
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
