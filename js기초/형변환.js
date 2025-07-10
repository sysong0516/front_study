let a = true;
console.log(typeof a);
a=String(a);
console.log(typeof a);


//변환불가능한것, undefined -> NaN
//null -> 0
//true false -> 1, 0
let d = Number("asdkfjalsd");
console.log(typeof d, d);

//boolean > "  "공백도 true다
console.log(Boolean("  "));


//==동등연산자는 자료형을 따지지않고 비교한다.
console.log(10==prompt("숫자를입력해봐라")); //true

//===일치연산자의 엄격버전(자료형을 따진다).
console.log(10===prompt("숫자를입력해봐라2"));//false