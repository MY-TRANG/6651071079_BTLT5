// Hàm xử lý lấy giá trị từ Form khi bấm Submit
function getFormvalue(event) {
    // Ngăn chặn hành vi reload lại trang mặc định của Form
    event.preventDefault();

    // Lấy đối tượng form theo ID
    var form = document.getElementById("form1");

    // Áp dụng DOM để lấy giá trị (value) của input qua tên (name)
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Hiển thị kết quả ra hộp thoại thông báo (alert)
    alert("First name: " + firstName + "\nLast name: " + lastName);

    // Hiển thị kết quả ra trang web (tùy chọn)
    var resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = "<strong>Họ và tên đã nhập:</strong> " + firstName + " " + lastName;
    }
}