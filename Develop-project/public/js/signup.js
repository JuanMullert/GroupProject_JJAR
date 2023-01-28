const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#signup-user').value.trim(); 
    //check for singup.handlebars email class
    const password = document.querySelector('#singup-password').value.trim();
    //check for singup.handlebars password class
  
    if (email && password) {
     
      }
      // this is what happens when we log in
      if (response.ok) {
        // document.location.replace('/');
    
          }
    }
  
  
  document
    .querySelector('.login-form')
    // when user clicks submit, run loginFormHandler
    .addEventListener('submit', loginFormHandler);
  