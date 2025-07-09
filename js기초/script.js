alert("js 파일만듬");
console.log("콘솔에 내용");

document.write("문서에 쓰기<br>");

let string="송상윤";

document.write(string+" 변수출력");

//상수
const STRING="red";

//자료확인
console.log(typeof(STRING));

let result=prompt('나이입력');
console.log(Number(result)+1);

//confirm 확인은 true, 취소는 false를 반환한다.
let re = confirm("어쩔래");
console.log(re);