// Hàm xử lý thêm 1 hàng mới vào bảng
function insert_Row() {
    // 1. Lấy đối tượng bảng theo ID
    var table = document.getElementById("sampleTable");

    // 2. Thêm một hàng mới vào cuối bảng (insertRow)
    // Hoặc truyền tham số table.rows.length để chèn vào vị trí cuối
    var newRow = table.insertRow(-1);

    // 3. Tính số thứ tự của hàng mới để đặt tên nội dung cell
    var rowCount = table.rows.length;

    // 4. Thêm các ô (cell) vào hàng mới vừa tạo (insertCell)
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // 5. Gán nội dung văn bản cho các ô
    cell1.innerHTML = "Row" + rowCount + " cell1";
    cell2.innerHTML = "Row" + rowCount + " cell2";
}