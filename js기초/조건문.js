let total = 0;
let DP = 0;
for(let i=1; i<11; i++){
  total+=DP+i;
  DP+=i;
}

console.log(total);