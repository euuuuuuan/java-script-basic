// null과 undefined
let code;
console.log(code);  // undefined가 출력된다. 선언한 뒤 값을 지정해주지 않았음을 의미

code = null;
console.log(code);  // null이 출력된다. 의도적으로 없다라는 값을 지정하는 것을 의미

// undefined도 null처럼 의도적 사용이 가능하나, 혼동을 유발할 수 있으므로 지양한다.

console.log(null == undefined);  // 비슷한 의미라서 true
console.log(null === undefined);  // 서로 다른 자료형이므로 false

// 이해 예시
let cup;
console.log(cup);  // undefined
cup = '물';
console.log(cup);  // 물
cup = null;
console.log(cup);  // null