// break와 continue
let i = 1;

while (i <= 10) {
    console.log(i);
    if (i === 7) {
        break;
    }
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) {
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
// 건너뛰는 것이 continue
