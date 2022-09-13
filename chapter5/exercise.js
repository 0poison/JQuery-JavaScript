while (true) {
    let input = prompt("입력 해주세요")
    if (input === "종료") {
        break
    }
    if (Number.isNaN(Number(input))) {
        alert("숫자를 입력해주세요")
    } else {
        alert(input);
    }
}