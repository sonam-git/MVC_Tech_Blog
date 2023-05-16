// This function is for logout operation
const logout = async function () {
  // The function sends a POST request to a given server-side API endpoint
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // if response is ok
  if (response.ok) {
    // the function redirects the user to the root URL "/"
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};
// invoke this function called "logout" when user click on logout button
document.querySelector("#logout-link").addEventListener("click", logout);
