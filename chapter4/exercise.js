//1. 반복문을 적용해서 계속 입력을 받게 하고 입력한 문장 또는 현재 시각에 따라서 다양한 질문과 답변을 하는 프로그램 만들기
while (true) {
    let output = prompt("하실 말씀을 입력해주세요");
    if (output === "안녕" || output === "안녕하세요") {
        alert("안녕");
    } else if (output === "시간" || output === "시간 알려줘") {
        alert(`현재 시간은 ${new Date().getHours()}시 ${new Date().getMinutes()}분 입니다.`);
    } else if (output === "종료" || output === "종료하세요") {
        break;
    } else {
        alert(output);
    }
}

//2. 1부더 100까지 더하는 프로그램 그 후 입력값까지 더하는 프로그램
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
alert(sum);

sum = 0;
let output1 = prompt("처음 수");
output1 = parseInt(output1);
let output2 = prompt("나중 수");
output2 = parseInt(output2);
for (let i = output1; i <= output2; i++) {
    sum += i;
}
alert(sum);


//3. 1부더 100까지 곱하고 프로그램 그 후 입력값에서 입력값까지 곱하는 프로그램
let multiplication = 1;
for (let i = 1; i <= 100; i++) {
    multiplication *= i;
}
alert(multiplication)

multiplication = 1;
let mulOutput1 = prompt("처음 수");
mulOutput1 = parseInt(mulOutput1);
let mulOutput2 = prompt("나중 수");
mulOutput2 = parseInt(mulOutput2);
for (let i = mulOutput1; i <= mulOutput2; i++) {
    multiplication *= i;
}

alert(multiplication)

//4 최소값과 최대값 찾기
let array = [52, 273, 103, 32, 57, 103, 31, 2];
let max = array[0];
let min = array[0];

for (const element of array) {
    if (element > max) {
        max = element;
    }
    if (element < min) {
        min = element;
    }
}

alert(`최대값은 ${max}입니다. 최소값은 ${min}입니다.`)