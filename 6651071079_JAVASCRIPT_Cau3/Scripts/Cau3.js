var a = 15;
var b = 28;
var c = 9;

var max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

console.log("So lon nhat la: " + max);

document.getElementById("ketqua").innerHTML =
    "So lon nhat la: " + max;