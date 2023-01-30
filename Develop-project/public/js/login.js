const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/user_routes/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // this is what happens when we log in
    if (response.ok) {
      document.location.replace('/');
    } else {
      // TODO make a route instead of provide a failed log
      // TODO make a sign up page
       // alert('Failed to log in');
      return 
      
        }
  }
};

document
  .querySelector('.login-form')
  // when user clicks submit, run loginFormHandler
  .addEventListener('submit', loginFormHandler);
