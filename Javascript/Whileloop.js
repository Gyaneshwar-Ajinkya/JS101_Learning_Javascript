function basicWhileLoop() {
    let i = 1;
    while (i <= 5) {
      console.log(i);
      i++;
    }
  }

  basicWhileLoop();

  
  function countDownFrom(n) {
    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
  countDownFrom(5);

  function findFirstEven(numbers) {
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] % 2 === 0) {
        return numbers[i];
      }
      i++;
    }
    return null; 
  }

  
console.log(findFirstEven([1, 3, 5, 7, 8]));