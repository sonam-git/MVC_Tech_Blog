// This function is for user login
const loginFormHandler = async function (event) {
  // prevents the default form submission behavior
  event.preventDefault();

  // retrieves the values of the username and password input fields
  const usernameEl = document.querySelector("#username-input-login");
  const passwordEl = document.querySelector("#password-input-login");
  // If the valid username and password is provided, The function then sends an asynchronous HTTP POST request to the given endpoint using fetch request
  if (usernameEl && passwordEl) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("FIND THIS", usernameEl.value, passwordEl.value);
    // If the response is successful
    if (response.ok) {
      console.log("response", response);
      // the function redirects the user to the dashboard page
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login");
    }
  }
};
// invoke the function loginFormHandler once user click the button
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
