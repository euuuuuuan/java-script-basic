/* 변수 = 값
*  함수 = 명령들
* */

// 함수 선언
function greeting(sentence) {
    console.log('Hi');
    console.log('안녕');
    console.log('곤니찌와');
    console.log('짜이찌엔');
    console.log('본줘르');
    console.log(sentence);
}

// 함수 호출
greeting('Hola');

function welcome(name) {
    console.log('안녕하세요 ' + name + '님!');
}

welcome('김태성')
welcome('김안나')
welcome('최수린')

function printSquare(x) {
    console.log(x * x);
}

printSquare(2);
printSquare(4);
printSquare(6);

function printSum(num1, num2) {
    console.log(num1 + num2);
}

printSum(10, 5);

function introduce(name, birth, nationality, job) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + ' 입니다.');
    console.log('생년월일은 ' + birth + ' 이고');
    console.log('국적은 ' + nationality + ' 입니다.');
    console.log('직업은 ' + job + ' 입니다.');
    console.log('잘 부탁드립니다!');
}

introduce('김철수', '17.05.24', '한국', '백수');