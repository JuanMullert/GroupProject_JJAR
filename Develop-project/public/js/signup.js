const signupFormHandler = async () => {
  const email = document.getElementById('signup-email').value.trim(); 
  //check for singup.handlebars email class
  const password = document.getElementById('signup-password').value.trim();
  //check for singup.handlebars password class

  if (email && password) {
    const response = await fetch(`/api/signup/new_user`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
      return;
    };
  }
} 
  
const form = document.getElementById("signup_post");
form.addEventListener("click", signupFormHandler);
  