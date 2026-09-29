var a = 5;
var b = 6;
var c = 7;

var p = (a + b + c) / 2;
var S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(S);
window.alert("The area of the triangle is: " + S.toFixed(2));
document.getElementById("ketqua").innerHTML = S.toFixed(2);