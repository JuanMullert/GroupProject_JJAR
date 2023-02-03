const loginFormHandler = async (event) => {
  event.preventDefault();

  // let button = document.querySelector("#clicklogin");
  const form = document.getElementById("form");
  

  const email = document.getElementById("#email-login").value.trim();
  const password = document.getElementById("#password-login").value.trim();
console.log(email, password);
  if (email && password) {

    // route to the api in use for front end--Juan
    const response = await fetch("../controllers/api/login_routes", {
      method: "POST",

      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // direction after login
    console.log(email, password);
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
  form.addEventListener("submit", loginFormHandler)
};


  // clicklogin.querySelector("#clicklogin").addEventListener("submit", loginFormHandler);