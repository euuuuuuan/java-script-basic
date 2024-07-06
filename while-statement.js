// while문 (while statement)
// while (조건부분) {
//     동작부분
// }


// let i = 1;
//
// while (i <= 10) {
//     console.log(`${i} Hello js`);
//     i++;
// }
//
// // for문과 비교
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} Hello js`);
// }

// if문이 더 간결해 보인다.
// 그렇다면 while문은 언제 사용하는 게 적절할까?

// let i = 30;
//
// while (i % 7 !== 0) {
//     i++;
// }
//
// console.log(i);

// 다음과 같이 전역 변수를 활용하고 반복문 밖에서 출력할 떄 유용하다.

/* 실습 설명
정수 n의 약수는 n을 어떤 수로 나누었을 때 나누어떨어지게 하는 정수를 의미합니다.
만약 정수 i가 정수 n의 약수라면, n을 i로 나누었을 때 나머지가 0이 됩니다.

while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요.
*/

// 나의 문제 해결

const N = 180;
let i = 1;
let count = 0;

while (i <= N) {
    if (N % i === 0) {
        console.log(i)
        count++;
    }
    i++;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`);