function calculateTotalSalary() {
  let account = document.getElementById("account").value;
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let startDate = document.getElementById("start-date").value;
  let salary = parseFloat(document.getElementById("salary").value);
  let position = document.getElementById("position").value;
  let hoursWorked = parseInt(document.getElementById("hours-worked").value);
  let totalSalary = 0;
  let employeeType = "";

  // Lỗi tin error
  document.getElementById("account-error").style.display = "none";
  document.getElementById("fullname-error").style.display = "none";
  document.getElementById("email-error").style.display = "none";
  document.getElementById("password-error").style.display = "none";
  document.getElementById("start-date-error").style.display = "none";
  document.getElementById("salary-error").style.display = "none";
  document.getElementById("position-error").style.display = "none";
  document.getElementById("hours-worked-error").style.display = "none";

  var isValid = true;

  // Khúc cần điền
  if (!account) {
    document.getElementById("account-error").style.display = "block";
    isValid = false;
    document.getElementById("account-error").innerHTML =
      "Tài khoản không được để trống";
  }

  if (!fullname) {
    document.getElementById("fullname-error").style.display = "block";
    isValid = false;
    document.getElementById("fullname-error").innerHTML =
      "Họ tên không được để trống";
  }

  if (!email) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
    document.getElementById("email-error").innerHTML =
      "Email không được để trống";
  } else if (!isEmail(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
    document.getElementById("email-error").innerHTML = "Email không hợp lệ";
  }

  if (!password) {
    document.getElementById("password-error").style.display = "block";
    isValid = false;
    document.getElementById("password-error").innerHTML =
      "Mật khẩu không được để trống";
  } else if (!isValidPassword(password)) {
    document.getElementById("password-error").style.display = "block";
    isValid = false;
    document.getElementById("password-error").innerHTML =
      "Mật khẩu không hợp lệ";
  }

  if (!startDate) {
    document.getElementById("start-date-error").style.display = "block";
    isValid = false;
    document.getElementById("start-date-error").innerHTML =
      "Ngày làm không được để trống";
  }

  if (!salary) {
    document.getElementById("salary-error").style.display = "block";
    isValid = false;
    document.getElementById("salary-error").innerHTML =
      "Lương cơ bản không được để trống";
  }

  if (!position) {
    document.getElementById("position-error").style.display = "block";
    isValid = false;
    document.getElementById("position-error").innerHTML =
      "Chức vụ không được để trống";
  }

  if (!hoursWorked) {
    document.getElementById("hours-worked-error").style.display = "block";
    isValid = false;
    document.getElementById("hours-worked-error").innerHTML =
      "Giờ làm trong tháng không được để trống";
  }

  if (!isValid) {
    return;
  }

  if (position === "manager") {
    totalSalary = salary * 3;
    employeeType = "Giám đốc";
  } else if (position === "supervisor") {
    totalSalary = salary * 2;
    employeeType = "Trưởng Phòng";
  } else if (position === "employee") {
    totalSalary = salary;
    employeeType = "Nhân Viên";
  }

  document.getElementById("total-salary").value = totalSalary;
  document.getElementById("employee-type").value = employeeType;
}
// Xóa nhân viên
function deleteEmployee() {
  var employeeId = document.getElementById("employee-id").value;
}

// Cập nhật nhân viên
function updateEmployee() {
  var employeeId = document.getElementById("update-account").value;
}
function searchEmployees() {
  t
  var employeeType = document.getElementById("employee-type-select").value;
}


function isEmail(email) {
  
}

function isValidPassword(password) {
  
}

function isValidSalary(salary) {
  
}

function isValidHoursWorked(hoursWorked) {
  
}


// phần regex
function isEmail(email) {
 
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(password);
}


// xóa nhân viên 
function clearInputs() {
  document.getElementById("account").value = "";
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("start-date").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("position").value = "";
  document.getElementById("hours-worked").value = "";
}


//thêm nhân viên
let employees = [];

// list add nhân viên
function addEmployee() {
  // Lấy giá trị từ các input
  let account = document.getElementById("account").value;
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let startDate = document.getElementById("start-date").value;
  let salary = document.getElementById("salary").value;
  let position = document.getElementById("position").value;
  let hoursWorked = document.getElementById("hours-worked").value;
}
  // Tạo đối tượng nhân viên
//   let employee = {
//     account: account,
//     fullname: fullname,
//     email: email,
//     password: password,
//     startDate: startDate,
//     salary: salary,
//     position: position,
//     hoursWorked: hoursWorked
//   };

//   // Thêm nhân viên vào mảng
//   employees.push(employee);

//   // Hiển thị danh sách nhân viên
//   displayEmployees();
// }

// function displayEmployees() {
//   let employeeList = document.getElementById("employee-list");
//   employeeList.innerHTML = "";

//   // Duyệt qua danh sách nhân viên và hiển thị thông tin
//   for (let i = 0; i < employees.length; i++) {
//     let employee = employees[i];

//     // Tạo một div để hiển thị thông tin nhân viên
//     let employeeDiv = document.createElement("div");
//     employeeDiv.innerHTML = `
//       <p><strong>Tài khoản:</strong> ${employee.account}</p>
//       <p><strong>Họ tên:</strong> ${employee.fullname}</p>
//       <p><strong>Email:</strong> ${employee.email}</p>
//       <p><strong>Mật khẩu:</strong> ${employee.password}</p>
//       <p><strong>Ngày làm:</strong> ${employee.startDate}</p>
//       <p><strong>Lương cơ bản:</strong> ${employee.salary}</p>
//       <p><strong>Chức vụ:</strong> ${employee.position}</p>
//       <p><strong>Giờ làm trong tháng:</strong> ${employee.hoursWorked}</p>
//     `;

//     employeeList.appendChild(employeeDiv);
//   }
// }
// function calculateTotalSalary() {
//   // Lấy giá trị từ các input
//   let hoursWorked = parseInt(document.getElementById("hours-worked").value);

//   // Tính tổng lương
//   // ...

//   // Đánh giá nhân viên dựa trên số giờ làm
//   let evaluation = "";
//   if (hoursWorked >= 192) {
//     evaluation = "Nhân viên xuất sắc";
//     document.getElementById("evaluation").className = "excellent";
//   } else if (hoursWorked >= 176) {
//     evaluation = "Nhân viên giỏi";
//     document.getElementById("evaluation").className = "good";
//   } else if (hoursWorked >= 160) {
//     evaluation = "Nhân viên khá";
//     document.getElementById("evaluation").className = "fair";
//   } else {
//     evaluation = "Nhân viên trung bình";
//     document.getElementById("evaluation").className = "average";
//   }

//   // Hiển thị đánh giá
//   document.getElementById("evaluation").textContent = evaluation;

//   // Hiển thị danh sách nhân viên
//   // ...
// }

