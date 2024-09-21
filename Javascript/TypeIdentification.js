function identifyType(value){

    console.log(typeof value);
}

identifyType("e");
identifyType(2);
identifyType(false);
identifyType([]);
identifyType({});


function isArrayOrObject(value){

    console.log( Array.isArray(value));
   console.log(typeof value);
}

isArrayOrObject("e");
isArrayOrObject(2);
isArrayOrObject(false);
isArrayOrObject([]);
isArrayOrObject({});

let x = [undefined,2,"2",null,false,true,3];

function identifyComplexType(value) {
  return value.map(function(num) {
    console.log(Array.isArray(num));     
    console.log(typeof num);             
    console.log(num instanceof Object);  

    return num;  
  });
}

identifyComplexType(x);

