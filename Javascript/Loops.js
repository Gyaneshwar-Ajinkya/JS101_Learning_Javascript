for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


  function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  const x = [2,4,4];
  printArrayElements(x);


  function createMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    return table;
  }
  
  const multiplicationTable = createMultiplicationTable(5);
  console.log(multiplicationTable);