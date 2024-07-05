// return과 console.log(출력문)의 차이
function printSquare(x) {
    console.log(x * x);
}

function getSquare(x) {
    return x * x;
}

printSquare(3);  // 9
getSquare(3);  // 출력값 없음
console.log(getSquare(3));  // 9
console.log(printSquare(3));  // undefined
