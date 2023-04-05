// 10. Write a js program to find power of any number using function.


  function findPower(base, exponent) {
    let result = 1;
    
    for(let i = 0; i < exponent; i++) {
      result *= base;
    }
    
    return result;
  }
  
  // test the function with some numbers
  let base = 2;
  let exponent = 9;
  
  console.log(`${base} to the power of ${exponent} is ${findPower(base, exponent)}`);
  
