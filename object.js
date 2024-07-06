// 객체 (Object)
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

// 객체에 내용 추가
console.log(code.owner);
code.owner = 'euan';
console.log(code.owner);

// 객체에 내용 삭제
console.log(code.worstCourse);
delete code.worstCourse;
console.log(code.worstCourse);

// 객체 내용 조회  // 객체 내에 undefined 값이 삽입되어 있을 수 있어서 정확한 분별이 불가능하다.
console.log(code.name !== undefined);

// 'propertyName' in object  // 불린값을 출력을 해주어 상대적으로 안전하게 조회가 가능하다.
console.log('name' in code);
console.log('wow' in code);



let myVoca = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    local: '지역의',
    global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요

delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요

myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';
console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요
console.log(myVoca['default value']);