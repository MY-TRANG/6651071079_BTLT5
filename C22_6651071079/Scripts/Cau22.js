function nhan() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);

    var ketqua = so1 * so2;

    document.getElementById("ketqua").innerHTML = ketqua;
}

function chia() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);

    if (so2 == 0) {
        document.getElementById("ketqua").innerHTML =
            "Khong the chia cho 0";
    } else {
        var ketqua = so1 / so2;

        document.getElementById("ketqua").innerHTML = ketqua;
    }
}