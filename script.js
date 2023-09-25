
function login() {
  let email = document.getElementById('login-email').value;
  let emailError = document.getElementById('email-error');

  let password = document.getElementById('login-password').value;
  let passwordError = document.getElementById('password-error');

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!email < 8) {
    emailError.textContent = 'enter a valid email';
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'enter a valid email';
    return false;
  }
  {
    emailError.textContent = '';
  }

  if (!password) {
    alert('Please enter valid password');
    return false;
  }
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    return false;
  } else {
    passwordError.textContent = '';
  }

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.email, 'data');
      alert('User Signed In successfully', data.email);
    })
    .catch((error) => {
      alert('Error while sigingIn User ' + error.message);
    });

  return false;
}
