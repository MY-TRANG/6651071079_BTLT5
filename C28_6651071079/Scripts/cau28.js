// Hàm xử lý sự kiện khi nhấn nút Style (Submit)
function js_style() {
    // Lấy đối tượng đoạn văn bản cần thay đổi
    var paragraph = document.getElementById('text');

    // Lấy giá trị từ các lựa chọn trong bảng tùy chỉnh
    var selectedFontSize = document.getElementById('fontSizeSelect').value;
    var selectedFontFamily = document.getElementById('fontFamilySelect').value;
    var selectedColor = document.getElementById('colorPicker').value;

    // Áp dụng DOM để thay đổi style
    paragraph.style.fontSize = selectedFontSize;
    paragraph.style.fontFamily = selectedFontFamily;
    paragraph.style.color = selectedColor;
}