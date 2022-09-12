let output="";
//중첩 반복문
for(let i=0; i<10; i++){
    for (let j = 0; j < i; j++) {
        output += "*";
    }
    output += "\n";
}
alert(output);

let output2="";
//중첩 반복문
for(let i=0; i<15; i++){
    for (let j = 0; j < 15-i; j++) {
        output2 += " ";
    }
    for (let j = 0; j < 2*i+1; j++) {
        output2 += "*";
    }
    output2 += "\n";
}

alert(output2)

let i=0
for (const number of [1, 2, 3, 4]) {
    alert(`${i}번째 요소는 ${number}입니다`);
    i++;
}