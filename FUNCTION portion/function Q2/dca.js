// 2. Write a js program to find diameter, circumference and area of circle using functions.


//   function for calculation of diameter of circle


function diameter(radValvue) {
    return radValvue * 2 
}

let radValvue = 10

let diaOfCircle = diameter(radValvue)

console.log(`the diameter of cicrcle with radius  ${radValvue} is ${diaOfCircle}`);



//   function for CALCULATION OF circumference of circle
//   formula for circumference : 2pi*r
function circumference(radValvue) {
    return 2 * pi * radValvue
}

let pi = 3.14159

let circumferenceOfCircle = circumference(radValvue)

console.log(`the circumference of cicrcle with radius  ${radValvue} is ${circumferenceOfCircle}`);


//   function for CALCULATION OF area of circle
//   formula for area : pi*r^2

function area(radValvue) {
    return pi * radValvue *radValvue
}

let areaOfCircle = area(radValvue)
console.log(`the area of cicrcle with radius  ${radValvue} is ${areaOfCircle}`);
