// Scope: 범위 영역

let x = 3;  // 글로벌 변수, 전역 변수 (Global Variable)
function myFunction() {  // 블록문 (Block Statement)
    let x = 5;  // 로컬 변수, 지역 변수 (Local Variable)
    console.log(x);
}

myFunction();  // 5
console.log(x);  // 3

let x = 100;

function myFunction() {
    let y = 40;
    console.log(x + y);
}

myFunction();
console.log(x);


/* 처음에 변수 x를 선언하면서 숫자 100을 할당했습니다. 이 변수는 글로벌 변수가 되겠죠?

다음에는 myFunction() 함수에 대한 정의가 있는데요. 함수 정의는 문제없으니 넘어가셔도 됩니다.

함수 정의 후에 myFunction() 함수를 호출하는데요. 함수 안에서 로컬 변수 y를 선언하며 정수 40을 할당하고,
 이어서 console.log(x + y)를 실행합니다. 우선 로컬 변수 x는 존재하지 않기 때문에 글로벌 변수 x에 담긴 100을 가져옵니다.
  그리고 함수 내에 존재하는 로컬 변수 y에 담긴 40을 사용합니다. 따라서 console.log(x + y)를 하면 140이 출력됩니다.

그리고 함수는 끝나서 다시 함수를 호출한 곳으로 돌아가는데, 더 이상 수행할 내용이 없으니 마지막 줄로 넘어갑니다.

끝으로 console.log(x)를 실행하는데, 이때는 글로벌 변수 x를 사용하기 때문에 100이 출력됩니다.
 결론적으로 콘솔에 출력된 것을 보면 이렇습니다.*/