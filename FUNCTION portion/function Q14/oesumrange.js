// 14. Write a js program to find sum of all even or odd numbers in given range using function.


function sumOfEvens(num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}


console.log(sumOfEvens(10, 20));
