const button = document.querySelector(".navbar-toggler");
const list = document.querySelector(".list-group");
const element = document.querySelectorAll(".list-group-item");

let isShow=false;

button.addEventListener("click",()=>{
  // if(isShow){
  //   list.classList.remove('show');
  //   isShow=false;
  // }
  // else{
  //   list.classList.add('show');
  //   isShow=true;
  // }
  list.classList.toggle('show');
});

element.forEach(i => {
  i.addEventListener("click",()=>{
    alert('zzz');
  });
});