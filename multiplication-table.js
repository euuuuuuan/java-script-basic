// 구구단 만들기
// let i = 1;
// let j = 1;
//
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
    console.log(current);
    let temp = previous;
    previous = current;
    current = current + temp;
}
