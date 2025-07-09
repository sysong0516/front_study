let a = true;
console.log(typeof a);
a=String(a);
console.log(typeof a);


//변환불가능한것, undefined -> NaN
//null -> 0
//true false -> 1, 0
let d = Number("asdkfjalsd");
console.log(typeof d, d);