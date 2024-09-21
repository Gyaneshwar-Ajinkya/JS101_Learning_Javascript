function checkCoercion(v1,v2){
    console.log(v1==v2);
    console.log(v1===2);
  }
  
  checkCoercion(3,"3");
  checkCoercion(false,0)
  checkCoercion(null,undefined)


  function coerceInArithmetic(v1,v2){
    let x = v1+v2;
      let r = v1*v2;
    let t = v1/v2;
    let j = v1-v2;
    console.log(x);
    console.log(r);
    console.log(t);
    console.log(j);
  }
  coerceInArithmetic(20,"2");

  function coerceInConditionals(value){
 
    if (value) {
      console.log(`${value} is truthy!`);
    } else {
      console.log(`${value} is falsy!`);
    }
  }
  
  coerceInConditionals("");
  coerceInConditionals(undefined);
  coerceInConditionals(0);
  coerceInConditionals(null);
  coerceInConditionals(NaN);
  coerceInConditionals(false);
  