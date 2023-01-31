const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {

    // route to the api in use for front end--Juan
    const response = await fetch("../controllers/api/user_routes", {
      method: "POST",

      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // direction after login
    if (response.ok) {
      document.location.replace("/");
      // TODO make a route instead of provide a failed log
      // TODO make a sign up page
      // alert('Failed to log in');
      return;
    } else {
      document.location.replace("../controllers/api/signup_routes");
    }
  }
};

document
  .querySelector(".login-form")
  // when user clicks submit, run loginFormHandler
  .addEventListener("submit", loginFormHandler);
