// switch문 (switch statement)
// switch (비교할_값) {
//     case 조건값_1:
//         동작부분;
//         break;
//     case 조건값_2:
//         동작부분;
//         break;
//     default:
//         동작부분;
// }

let myChoice = 5;

switch (myChoice) {
    case 1:
        console.log('토끼를 선택한 당신, ...');
        break;
    case 2:
        console.log('고양이를 선택한 당신, ...');
        break;
    case 3:
        console.log('코알라를 선택한 당신, ...');
        break;
    case 4:
        console.log('강아지를 선택한 당신, ...');
        break;
    default:
        console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

// break문을 사용하지 않으면 case구문 안의 모든 출력문이 출력되게 된다.

/*let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
*/

// 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 효과적이고,
// 특정값을 만족하는 조건식을 만들 때는 switch문이 효과적이다.