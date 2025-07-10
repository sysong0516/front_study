let btn=document.getElementById('btn');
let bg=document.querySelector("body");

btn.addEventListener('click',(color)=>{
   bg.style.background=color;
   if(color=='black'){
    bg.style.font'white';
   }
 }
);