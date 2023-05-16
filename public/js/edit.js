// This function is an event handler for when the user submits the form with an id
const newFormHandler = async function (event) {
  // prevents the default form submission behavior
  event.preventDefault();
  // extracts the values from user input
  const post_id = document.querySelector('input[name="post-id"]').value;
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  console.log(body);
  // makes a PUT request to the server
  await fetch(`/api/posts/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // it redirects the user to the "/dashboard" page.
  document.location.replace("/dashboard");
};

// This function is an event handler for when the user clicks the delete button for a post.
const deleteClickHandler = async () => {
  // It extracts the value of the "post-id" input field from the form
  const post_id = document.querySelector('input[name="post-id"]').value;
  // makes a DELETE request to the server
  await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });
  // it redirects the user to the "/dashboard" page.
  document.location.replace("/dashboard");
};

// The event listener is attached to the "submit" event of the form
// invoke the function newFormhandler
document
  .querySelector("#edit-post-form")
  .addEventListener("submit", newFormHandler);
// invoke the function deleteClickHandler
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
