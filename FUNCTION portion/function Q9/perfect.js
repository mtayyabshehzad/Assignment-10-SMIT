// 9. Write a js program to print all perfect numbers between given interval using functions.

function isPerfect(num) {
    let sum = 0;
    
    for(let i = 1; i <= num/2; i++) {
      if(num % i === 0) {
        sum += i;
      }
    }
    
    return sum === num;
  }
  
  function printPerfectNumbers(start, end) {
    for(let i = start; i <= end; i++) {
      if(isPerfect(i)) {
        console.log(i);
      }
    }
  }
  
  // test the function with a range of numbers
  const start = 100;
  const end = 1000;
  
  console.log(`Perfect numbers between ${start} and ${end}:`);
  printPerfectNumbers(start, end);
  