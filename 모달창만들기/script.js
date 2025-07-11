const btnBoard = document.querySelector('#open');
const closeBoard = document.querySelector('#close');

btnBoard.addEventListener('click', ()=>{
  document.querySelector('.black-bg').classList.add('show');
});

closeBoard.addEventListener('click', ()=>{
  document.querySelector('.black-bg').classList.remove('show');
});