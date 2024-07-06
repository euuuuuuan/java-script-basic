// 메소드 (method)
let rectAngle = {
    width: 30,
    height: 50,
    getArea: function () {
        return rectAngle.width * rectAngle.height;
    },
};

let triAngle = {
    width: 15,
    height: 40,
    getArea: function () {
        return triAngle.width * triAngle.height / 2;
    },
}

let myVoca = {
    // 코드를 작성해 주세요.
    addVoca: function (key, value) {
        myVoca[key] = value;
    },
    deleteVoca: function (key) {
        delete myVoca[key];
    },
    printVoca: function (key) {
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`)
    },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');