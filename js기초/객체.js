let user={
  name:'홍길동',
  age:20
}

console.log(user.name);
console.log(user['age']);

//in연산자로 키의 존재여부 확인가능
console.log("name"in user);
console.log("sd" in user);