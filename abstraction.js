/*
* abstraction (추상화)
* 구체적인 것을 배제하고
* 간략하게 필요한 내용만 함축한 것
* 복잡한 것들을 목적에 맞게 단순하는 것
* 요약
* 1. 목적을 명확히!
* 2. 불필요한 것들은 숨기기!
* 3. 핵심만 드러내기!
* */

/* variable (변수)*/
// 변수 선언
let espressoPrice;
let lattePrice = 4300;
let mochatPrice = 4800;

espressoPrice = 3000;

console.log(espressoPrice * 2);
console.log(mochatPrice * 4 + lattePrice * 3);

// 실습 설명
// 커피를 만들 때 들어가는 재료들의 칼로리는 다음과 같습니다.
//
// 에스프레소 : 10 kCal
// 우유 : 170 kCal
// 초코시럽 : 50 kCal
// 휘핑크림 : 60 kCal
//
// 우리가 판매했던 메뉴들의 칼로리를 한번 계산해 보려고 하는데요, 각 재료의 이름을 변수 이름으로 사용하여, 메뉴들의 칼로리를 저장해 주세요.
// 변수를 사용하는 테스트 코드는 이미 작성되어 있으니 별도로 편집하지 않으셔도 됩니다. 여러분은 변수를 선언하고 값을 입력해 주세요!
//
// 변수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.
//
// 실습 결과
//
// 10
// 180
// 230
// 290

// 나의 문제 해결
let espresso = 10;
let milk = 170;
let chocoSyrup = 50;
let whipedCream = 60;

console.log(espresso);
console.log(milk + espresso);
console.log(chocoSyrup);
console.log(whipedCream);

// 해설
// 주어진 과제를 그대로 실행시켜보면 일단은 오류가 발생합니다. 메뉴별 칼로리를 출력하는 구간에서 사용하는 변수를 정의하지 않았기 때문인데요,
// 주어진 템플릿의 코드들을 천천히 살펴보면, espresso, milk, chocolateSyrup, whippedCream 이라는 변수를 사용하는 것을 볼 수 있습니다.
//
// 변수를 사용하려면 우선 변수 선언을 해야 하는데 자바스크립트에서 변수 선언은 let이라는 키워드를 사용합니다.
//
// 키워드 변수이름 = 값 모양으로 작성하면 변수 선언과 동시에 값을 지정할 수 있으니, 키워드와 함께 각 변수 이름에 주어진 칼로리들을 값으로 입력해주면 됩니다.
//
// 모범 답안
//
// // 코드를 작성해 주세요.
// let espresso = 10;
// let milk = 170;
// let chocolateSyrup = 50;
// let whippedCream = 60;
//
// // 메뉴별 칼로리
// console.log(espresso); // 에스프레소 칼로리
// console.log(espresso + milk); // 라떼 칼로리
// console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
// console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카 (휘핑 추가) 칼로리
// 실습 결과
// 코드를 실행해보면 각 메뉴별 계산된 칼로리가 잘 출력됩니다.
//
//
// 10
// 180
// 230
// 290

