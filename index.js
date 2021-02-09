let str = "If the kite doesn’t face adverse wind it won’t rise 1 ";
let n = "adverse"
let m = true;
let x = str.indexOf("e");
console.log(x);
console.log(str.indexOf("kite"));
console.log(str.indexOf("I"));
console.log(str.indexOf("i"));
console.log(str.indexOf("  face "));
console.log(str.indexOf("Face"));
console.log(str.indexOf("e",6));
console.log(str.lastIndexOf("e"));
console.log(str.lastIndexOf("e",9));
console.log(str.indexOf(n));
console.log(str.indexOf(m+0));
console.log(str.indexOf("e",str.indexOf("e")+1));//baraye peyda kardan e dovom
let my_Array = ["ali","reza","hadi","ali","reza","ali"];
console.log(my_Array.lastIndexOf("ali",4));
console.log(my_Array[2].indexOf("d"));