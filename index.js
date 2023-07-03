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
