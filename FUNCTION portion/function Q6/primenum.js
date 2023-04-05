// 6. Write a js program to find all prime numbers between given interval using functions.

function isPrime(num) {
    if(num < 2) {
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }


  var prime = isPrime(4)
  console.log(prime); 