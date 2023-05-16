// function for signup
const signupHandler = async function (event) {
  // prevents the default behavior of the form submission
  event.preventDefault();
  // retrieve the values from user input
  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  // It checks that these elements exist before proceeding further.
  if (usernameEl && passwordEl) {
    // if not then it uses the fetch() method to make a POST request to given API endpoint
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("FIND THIS", usernameEl.value, passwordEl.value);
    // If the response from the server is successful
    if (response.ok) {
      // redirect the user to the dashboard page
      document.location.replace("/dashboard");
    } else {
      console.log(response)
      alert("Failed to sign up");
    }
  }
};
// Invoke this function when user click on sign up button
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupHandler);
