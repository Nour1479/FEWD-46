//Declare a variable representing the like link
var link = document.querySelector(".like-link");
//Declare a variable representing the like count
var likeCount = document.querySelector(".like-count");
//Declare a variable representing the new comment form
var form = document.querySelector("#new-comment");
//Declare a variable for the text in the new form's body
var commentBody = document.querySelector("#new-comment-body");

link.addEventListener("click", like);
form.addEventListener("submit", createComment);

function like(event) {
  event.preventDefault();
  var count = parseInt(likeCount.textContent);
  likeCount.textContent = count+1;
}

function createComment(event) {
  event.preventDefault();
  var commentX = document.createElement("div");
  commentX.textContent = commentBody.value;
  commentX.classList.add("comment");
  comments.appendChild(commentX);
  form.reset();
}
