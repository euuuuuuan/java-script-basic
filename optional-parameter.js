// 옵셔널 파라미터
function introduce(name, age, nationality = '한국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살 이고,`);
    console.log(`국적은 ${nationality}입니다.`)
}

introduce('김사랑', 4, '미국');
console.log('');
introduce('김대후', '4')

// 옵셔널 파라미터는 순서를 꼭 지켜주어야 한다. (가장 뒤쪽으로 선언)