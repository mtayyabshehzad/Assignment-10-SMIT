// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// for prime numbers
function isPrime(num) {
  if(num <= 1) return false;
  
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  
  return true;
}


// for armstrong number






// for perfect numbers
function isPerfect(num) {
  let sum = 0;
  
  for(let i = 1; i <= num/2; i++) {
    if(num % i === 0) {
      sum += i;
    }
  }
  
  return sum === num;
}


// results

const number = 23;

if(isPrime(number)) {
  console.log(`${number} is a prime number`);
}  else if(isPerfect(number)) {
  console.log(`${number} is a perfect number`);
} else {
  console.log(`${number} is neither a prime, nor perfect number`);
}
