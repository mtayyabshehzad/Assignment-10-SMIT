// 12. Write a js program to print all even or odd numbers in given range using function.

// for even number

function evenNum(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

var start = 10
var end = 20
console.log(`Even numbers between ${start} and ${end} are:`);
evenNum(start, end);


// for odd Number

function oddNum(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
var start = 1
var end = 10
  console.log(`Odd numbers between ${start} and ${end} are:`);
  oddNum(start, end);