function tinhTien() {

    var thucAn = document.getElementById("thucAn");
    var nuocUong = document.getElementById("nuocUong");

    var ketQua = document.getElementById("ketqua");

    var tongTien = 0;

    ketQua.innerHTML = "";

    // Lấy các món thức ăn được chọn
    for (var i = 0; i < thucAn.options.length; i++) {

        if (thucAn.options[i].selected) {

            var tenMon = thucAn.options[i].text;
            var gia = Number(thucAn.options[i].value);

            tongTien = tongTien + gia;

            ketQua.innerHTML =
                ketQua.innerHTML +
                "<tr>" +
                "<td>" + tenMon + "</td>" +
                "<td>" + gia + "</td>" +
                "</tr>";
        }
    }

    // Lấy các món nước uống được chọn
    for (var i = 0; i < nuocUong.options.length; i++) {

        if (nuocUong.options[i].selected) {

            var tenMon = nuocUong.options[i].text;
            var gia = Number(nuocUong.options[i].value);

            tongTien = tongTien + gia;

            ketQua.innerHTML =
                ketQua.innerHTML +
                "<tr>" +
                "<td>" + tenMon + "</td>" +
                "<td>" + gia + "</td>" +
                "</tr>";
        }
    }

    // Kiểm tra ban ngày hay ban đêm
    var thoiDiem = document.querySelector(
        'input[name="thoiDiem"]:checked'
    ).value;

    // Nếu ban đêm thì cộng thêm 10%
    if (thoiDiem == "dem") {
        tongTien = tongTien * 1.1;
    }

    ketQua.innerHTML =
        ketQua.innerHTML +
        "<tr>" +
        "<td><b>Tổng tiền</b></td>" +
        "<td><b>" + tongTien + " đồng</b></td>" +
        "</tr>";
}