// 24. Write a js program to find maximum and minimum elements in array using function.

// for maximum 
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

var numbers = [5, 3, 9, 1, 7];
var max = findMax(numbers);
console.log(`Maximum: ${max}`);



// for minimum


function findMin(arr) {
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
  }
  
  
  var numbers = [5, 3, 9, 1, 7];
  var min = findMin(numbers);
  console.log(`Minimum: ${min}`); 
  