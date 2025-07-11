const FRUITS = [
  {name:'mango', memo:"달달하고 맛있음"},
  {name:'melon', memo:"그냥 맛있다"},
  {name:'apple', memo:"새콤달콤하다"}
];

for(let i=0; i<FRUITS.length; i++){
  let card=`
    <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../image/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
    </div>
  `;
  document.querySelector('.row').insertAdjacentHTML('beforeend',card);
}

const cart = document.querySelectorAll('.cart');
for(let i=0; i<cart.length; i++){
  cart[i].addEventListener('click',(e)=>{
    //event객체 e의 부모의 부모(card-title) 호출
    let nameTag = (e.target.previousElementSibling.previousElementSibling);
    let name =  nameTag.innerHTML;
    
    //기존 cart에 있는 값 확인하기
    let temp = localStorage.getItem('cart');
    //cart에 값이 있으면 cart를 가져와서 parse한 후 배열에 추가할 값을 추가한뒤
    //다시 json으로 변환하여 저장한다.
    if(temp!=null){
      temp=JSON.parse(temp);
      temp.push(name);
      localStorage.setItem('cart', JSON.stringify(temp));
    }
    else{
      localStorage.setItem('cart', JSON.stringify([name]));
    }
  })
}



// arr배열을 json형식의 문자열로 변환
// let arr_json = JSON.stringify(arr);

// 문자열을 다시 배열로 되돌림
// arr=JSON.parse(arr_json);

