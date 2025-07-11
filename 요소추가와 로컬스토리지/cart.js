let cart=localStorage.getItem('cart');
console.log(cart);
cart=JSON.parse(cart);
for(let i=0; i<cart.length; i++){
  let card=`
    <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../image/${cart[i]}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${cart[i]}</h5>
          </div>
        </div>
    </div>
  `;
  document.querySelector('.list').insertAdjacentHTML('beforeend',card);
}