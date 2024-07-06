// for..in

// for (변수 in 객체) {
//     동작부분
// }

let code = {
    name: '코딩',
    bornYear: 2024,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: 'Hello World',
        language: 'JavaScrip'
    }
};

for (let key in code) {
    console.log(key);
    console.log(code[key]);
}

// 정수형 프로퍼티 네임
// 객체의 프로퍼티 네임으로 숫자형을 그대로 사용할 수도 있다는 점을 살펴봤는데요.
// for...in문을 사용할 때 주의해야 할 순간은 바로 정수형 프로퍼티 네임이 있을 때 입니다.
// 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.
//
//
// let myObject = {
//   3: '정수3',
//   name: 'codeit',
//   1: '정수1',
//   birthDay: '2017.5.17',
//   2: '정수2',
// };
//
// for (let key in myObject) {
//   console.log(key);
// }
// 이 코드를 그대로 실행해보면 아래와 같은 결과가 출력되는데요.
//
//
// 1
// 2
// 3
// name
// birthDay
// 분명히 3, name, 1, birthday, 2순서로 프로퍼티가 작성되었음에도 불구하고,
// for...in문이 실행될 때는 오름차순으로 정렬이 되어 출력이 된 모습을 확인할 수 있습니다.
// 굳이 for문을 그대로 작성하지 않고도 그냥 콘솔에 myObject를 콘솔에 출력만 해봐도
//
//
// {1: "정수1", 2: "정수2", 3: "정수3", name: "codeit", birthDay: "2017.5.17"}
// 객체가 정수형 프로퍼티에 한해서 오름차순으로 정렬이 되고 나머지는 추가한 순서대로 정렬이 되는 걸 확인할 수 있죠?
// 처음에 살펴봤던 것처럼 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들더라도, 정렬방식은 동일하게 처리됩니다.
//
//
// let myObject = {
//   '3': '정수3',
//   name: 'codeit',
//   '1': '정수1',
//   birthDay: '2017.5.17',
//   '2': '정수2',
// };
//
// for (let key in myObject) {
//   console.log(key);
// }
//
// 1
// 2
// 3
// name
// birthDay
// 자동으로 정렬되는 특성이 장점처럼 느껴질 수도 있지만 대부분의 경우에는 의도치 않은 결과를 가져올 수도 있기 때문에,
// 일반적으로 정수형 프로퍼티는 잘 사용되지 않는데요.
//
// 그래서 불가피한 경우에는 이런 객체의 정렬방식을 잘 이해한 상태에서 사용하고,
// 가급적 명확한 의미가 있는 프로퍼티 네임을 사용하시는걸 권장해 드립니다.

let hyesoonScore = {
    '데이터 모델링의 이해': 10,
    '데이터 모델과 성능': 8,
    'SQL 기본': 22,
    'SQL 활용': 18,
    'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
    '데이터 모델링의 이해': 14,
    '데이터 모델과 성능': 8,
    'SQL 기본': 12,
    'SQL 활용': 4,
    'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
    let totalBalance = 0;
    for (let key in scoreObject) {
        totalBalance += scoreObject[key];
    }

    if (totalBalance >= 60) {
        console.log('축하합니다! 합격입니다!');
    } else {
        console.log('아쉽지만 불합격입니다..')
    }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);