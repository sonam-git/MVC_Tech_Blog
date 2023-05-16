// users to submit comments and delete comments

// This function is an event listener that triggers when the user submits a comment on the blog post
const commentFormHandler = async function (event) {
  // prevents the default form submission behavior
  event.preventDefault();

  // extracts the post ID and comment text from the form inputs
  const post_id = document.querySelector('input[name="post-id"]').value;
  const comment_text = document.querySelector(
    'input[name="comment-body"]'
  ).value;

  console.log(comment_text)
  console.log(post_id)
  // sends an HTTP POST request to the server to create a new comment with the extracted data only if user input some text
  if (comment_text) {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // reloads the page to display the updated comments section.
    document.location.reload();
  }
};

// This function is an event listener that triggers when the user clicks the delete button next to a comment
const deleteClickHandler = async () => {
  // extracts the post ID and comment ID from the HTML elements
  const post_id = document.querySelector('input[name="post-id"]').value;
  // sends an HTTP DELETE request to the server to delete the comment with the extracted IDs
  await fetch(`/api/comment`, {
    method: "DELETE",
  });
  // reloads the page to display the updated comments section.
  document.location.reload();
};

// addEventListener method attaches the commentFormHandler function to the "submit",it is executed whenever the user submits a comment.
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
