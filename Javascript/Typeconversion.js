function convertToNubmer(number){

    let num =Number(number)

    return num;

}
let v = convertToNubmer(true);
let x = convertToNubmer("123");
console.log(x,v);

function convertToString(value){

    let str= String(value);
    
    return str;
    
    }
    
    let m = convertToString(42);
    let n = convertToString(true);
      let s = convertToString({});
      let t = convertToString([]);
    console.log(typeof m,typeof n, typeof s , typeof t);

    function convertAndCompare(a, b) {
  
        const numA = Number(a);
        const numB = Number(b);
      
        return numA===numB;
      }
      let y = convertAndCompare("42", 42);
      let d = convertAndCompare(false, 0);
      console.log(y);
      console.log(d);