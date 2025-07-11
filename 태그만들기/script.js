let p = document.createElement('p');

p.className="box";
p.innerHTML="Hello World!";

let p2 = document.createElement('p');
p2.innerHTML="It's time to";

//append는 요소의 안쪽 마지막에 추가
document.querySelector('body').append(p);

//prepend는 요소의 안쪽 첫번째에 추가
document.querySelector('body').prepend(p2);

//.before는 요소 전에 추가 .after는 요소 후에 추가

let ulTag=document.createElement('ul');
ulTag.before(p);


let liTag = document.createElement('li');
liTag=innerHTML = '새로 생성된 li태그';
document.querySelector('ul').prepend(liTag);
