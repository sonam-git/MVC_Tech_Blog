//  function to create new post
const newFormandler = async function (event) {
  // prevents the default form submission behavior
  event.preventDefault();
  //  retrieves the values entered in the input fields by the user
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('input[name="post-body"]').value;
  console.log("body=", body);
  // the fetch method to send a POST request to the /api/post endpoint
  var response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // redirect the user to the /dashboard page after the POST request has been completed.
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Couldn't make new post");
  }
};
// Invoke this function when user click on submit button
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormandler);
