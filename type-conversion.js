// 형 변환(Type Conversion)

// String, Number, Boolean
console.log('10' + '5');
console.log(10 + 5);
console.log()
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// // 숫자 -> 문자
// let x = 123;
// console.log(x);  // 123(boolean)
// console.log(String(x));  // 123
// console.log(typeof x);  // number
// console.log(typeof String(x));  // string
//
// console.log('');
//
// // 불린 -> 문자
// let y = true;
// console.log(y);  // true(boolean)
// console.log(String(y));  // true
// console.log(typeof y);  // boolean
// console.log(typeof String(y));  // string

//  문자 -> 숫자
let x = '문자';
console.log(x);
console.log(Number(x));  // 문자형은 NaN이다.
console.log(typeof x);
console.log(typeof Number(x));

console.log('');

// 불린 -> 숫자
let y = true;  // true는 1 false는 0으로 형변환 된다.
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

// ''같은 빈문자열이나 숫자 0도, NaN도 false로 변환된다.
// 이러한 값들을 falsy값이라고 한다.