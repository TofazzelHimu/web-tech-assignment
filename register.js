document.getElementById('form1').addEventListener("submit", function (e) {
    e.preventDefault();

    let id = document.getElementById("employeeId").value.trim();
    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let joinDate = document.getElementById("JoiningDate").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let type = document.querySelector('input[name="empType"]:checked');

    let isValid = true;

    const idPattern = /^EMP\d{3}$/;
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    // Clear all errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    if (!idPattern.test(id)) {
        document.getElementById("employeeIdError").innerText = "*Invalid ID (EMP followed by 3 digits)";
        isValid = false;
    }
    if (!namePattern.test(name)) {
        document.getElementById("fullNameError").innerText = "*Only letters and spaces allowed";
        isValid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "*Invalid email format";
        isValid = false;
    }
    if (department === "") {
        document.getElementById("departmentError").innerText = "*Please select a department";
        isValid = false;
    }
    if (!joinDate) {
        document.getElementById("JoiningDateError").innerText = "*Please enter joining date";
        isValid = false;
    }
    if (!gender) {
        document.getElementById("genderError").innerText = "*Please select a gender";
        isValid = false;
    }
    if (!type) {
        document.getElementById("checkboxError").innerText = "*Select at least one type";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('display').innerHTML = `
            <h3>Registered Employee Info</h3>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Joining Date:</strong> ${joinDate}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Type:</strong> ${type.value}</p>
        `;
    }
});
