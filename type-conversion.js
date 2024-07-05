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

console.log('')
// 산술 연산 (+, -, *, /, %, **)
console.log(4 + '2');  // 42
console.log(4 + 2);  // 6
console.log(4 - true);  // 3
console.log(4 * false);  // 0
console.log(4 / '2');  // 2
console.log('4' ** true);  // 4
console.log(4 % 'two');  // NaN

// 관계 비교 연산 ( <, <=, >, >=)
console.log(2 < '3');  // true
console.log(2 > true);  // true
console.log('2' <= false);  // false
console.log('two' >= 1);  // false

// 같음 비교 연산 (===, !==, ==, !=)
console.log(1 === '1');  // 일치, 불일치(!==) // false
console.log(1 === true);  // false
console.log(1 == '1');  // 동등, 부등(!=)  // true
console.log(1 == true);  // true