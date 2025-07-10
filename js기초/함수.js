function i(){
  console.log('hello world');
}

//물론 상위스코프에 있는 함수는 그냥 호출할 수 있다.
function why(){
  console.log('perfectly');
  i();
}

//callback을 쓰는 이유는 callback함수를 통한 추상화로 가변성을 챙기기위함
function iknow(callback){
  callback();
}

why();
iknow(i);
iknow(why);