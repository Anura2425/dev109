function validateForm() {
  var errorMessages = "";
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validState = false;
  var validCountry = false;
  var validZipcode = false;

  // Validate First Name
  var firstname = document.getElementById("firstname").value.trim();
  if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
    errorMessages += "<p>The first name is required, cannot be greater than 20 characters, and must contain only alphabetical characters.</p>";
  } else {
    validFirstname = true;
  }

  // Validate Last Name
  var lastname = document.getElementById("lastname").value.trim();
  if (lastname === "" || lastname.length > 50 || !/^[a-zA-Z]+$/.test(lastname)) {
    errorMessages += "<p>The last name is required, cannot be greater than 50 characters, and must contain only alphabetical characters.</p>";
  } else {
    validLastname = true;
  }

  // Validate Email
  var email = document.getElementById("email").value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    errorMessages += "<p>Please enter a valid email address.</p>";
  } else {
    validEmail = true;
  }

  // Validate Phone
  var phone = document.getElementById("phone").value.trim();
  var phonePattern = /^\d{10,15}$/;
  if (phone === "" || !phonePattern.test(phone)) {
    errorMessages += "<p>Please enter a valid phone number (10-15 digits).</p>";
  } else {
    validPhone = true;
  }

  // Validate Username
  var username = document.getElementById("username").value.trim();
  if (username === "" || username.length > 12) {
    errorMessages += "<p>The username is required and cannot be greater than 12 characters.</p>";
  } else {
    validUsername = true;
  }

  // Validate Password
  var password = document.getElementById("password").value.trim();
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]{7,}$/;
  if (password === "" || !passwordPattern.test(password)) {
    errorMessages += "<p>The password is required, must be at least 7 characters long, and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>";
  } else {
    validPassword = true;
  }

  // Validate Address
  var address = document.getElementById("address").value.trim();
  if (address === "") {
    errorMessages += "<p>The address is required.</p>";
  } else {
    validAddress = true;
  }

  // Validate City
  var city = document.getElementById("city").value.trim();
  if (city === "") {
    errorMessages += "<p>The city is required.</p>";
  } else {
    validCity = true;
  }

  // Validate State
  var state = document.getElementById("state").value.trim();
  if (state === "") {
    errorMessages += "<p>The state is required.</p>";
  } else {
    validState = true;
  }

  // Validate Country
  var country = document.getElementById("country").value.trim();
  if (country === "") {
    errorMessages += "<p>The country is required.</p>";
  } else {
    validCountry = true;
  }

  // Validate Zipcode
  var zipcode = document.getElementById("zipcode").value.trim();
  if (country === "USA" && (zipcode === "" || !/^\d{5}$/.test(zipcode))) {
    errorMessages += "<p>The zip code is required for the United States and must be 5 digits.</p>";
  } else {
    validZipcode = true;
  }

  // Display error messages
  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Return the overall validation status
  return (
    validFirstname &&
    validLastname &&
    validEmail &&
    validPhone &&
    validUsername &&
    validPassword &&
    validAddress &&
    validCity &&
    validState &&
    validCountry &&
    validZipcode
  );
}
