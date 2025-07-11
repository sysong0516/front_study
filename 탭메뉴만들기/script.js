const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

btns[0].addEventListener('click', ()=>{
  btns[0].classList.toggle('selected');
  contents[0].classList.toggle('show');
});

btns[1].addEventListener('click', ()=>{
  btns[1].classList.toggle('selected');
  contents[1].classList.toggle('show');
});

btns[2].addEventListener('click', ()=>{
  btns[2].classList.toggle('selected');
  contents[2].classList.toggle('show');
});