// typeof 연산자
console.log(typeof 101);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof 1);
console.log(typeof 1.0);
// 자바 스크립트는 소수와 정수를 따로 구분하지 않는다.

let name = 'Eugen';

function sayHello() {
    console.log('Hello');
}

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'World'); // 우선순위가 typeof 연산자가 우선이라서 Hello 만 적용된다.
console.log(typeof 8 - 3); // not a number : NaN