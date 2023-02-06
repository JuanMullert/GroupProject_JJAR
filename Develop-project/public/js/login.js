
const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  console.log(email, password);
  if (email && password) {

    // route to the api in use for front end--Juan
    const response = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    // direction after login
    console.log(email, password);
    if (response.ok) {
      document.location.replace("/");
      return;
    } 
  }
};

const form = document.getElementById("submit_button");
form.addEventListener("click", loginFormHandler);
