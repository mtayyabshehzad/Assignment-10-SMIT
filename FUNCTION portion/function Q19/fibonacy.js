// 19. Write a js program to generate nth Fibonacci term using function.

function fibonacy(num) {
    let firstNum = 0;     //  1
    console.log(firstNum);
    if (num == 0) {
        return
    }
    let secondNum = 1;   // 1
    console.log(secondNum);
    if (num == 1) {
        return
    }
    for (let index = 2; index < num; index++) {
        let thirdNumber = firstNum + secondNum;
        console.log(" " + thirdNumber); // 1
        firstNum = secondNum;
        secondNum = thirdNumber;
    }
}
fibonacy(10);
