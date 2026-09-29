var nam = 2007;

var ketQua;

if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
    ketQua = nam + " la nam nhuan";
} else {
    ketQua = nam + " khong phai la nam nhuan";
}

console.log(ketQua);

document.getElementById("ketqua").innerHTML = ketQua;