let hello=prompt();
if (hello.indexOf("안녕") !== -1) {
    alert("안녕하세요");
} else if(hello.indexOf("잘자") !== -1 || hello.indexOf("잘 자")!== -1){
    alert("안녕히 주무세요")
}else{
    alert("인사를 안 하다니")
}