
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  

  let result = 2 + 2;
  console.log(result);


  function expressionInFunction(a, b) {
    return a + b; 
  }
  
  let sum = expressionInFunction(3, 4);
  if (sum > 5) {
    console.log("Sum is greater than 5");
  }

  function complexExpression(a, b, c) {
    let result;
    if (a + b > c * b) {
      result = "a + b is greater";
    } else if (a + b === c * b) {
      result = "a + b is equal";
    } else {
      result = "a + b is smaller";
    }
    return result;
  }
  
  let message = complexExpression(5, 3, 2);
  console.log(message);