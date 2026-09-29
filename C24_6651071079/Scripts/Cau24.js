function xuatThu() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    var ngayThangNam = new Date(nam, thang - 1, ngay);

    var thu = ngayThangNam.getDay();

    var tenThu = "";

    if (thu == 0) {
        tenThu = "Chủ nhật";
    } else if (thu == 1) {
        tenThu = "Thứ 2";
    } else if (thu == 2) {
        tenThu = "Thứ 3";
    } else if (thu == 3) {
        tenThu = "Thứ 4";
    } else if (thu == 4) {
        tenThu = "Thứ 5";
    } else if (thu == 5) {
        tenThu = "Thứ 6";
    } else if (thu == 6) {
        tenThu = "Thứ 7";
    }

    document.getElementById("ketqua").innerHTML =
        tenThu + " Ngày " + ngay +
        " tháng " + thang +
        " năm " + nam;
}