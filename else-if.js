// if문과 else문만 사용할  경우
// 코드가 다소 복잡해지고 가독성이 떨어지는 문제가 발생한다.
// 그럴땐 else if를 사용한다.
let temperature = 1;
if (temperature <= 0) {
    console.log('물이 업니다.');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
    console.log('물이 끓습니다.');
} else {
    console.log('물이 모두 수증기가 되었습니다.');
}