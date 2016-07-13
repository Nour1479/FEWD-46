var link = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");
var form = document.querySelector("#new-comment");
var commentBody = document.querySelector("#new-comment-body");

link.addEventListener("click", like);
form.addEventListener("submit", createComment);

function like(event) {
    event.preventDefault();
    var count = parseInt(likeCount.textContent);
    likeCount.textContent = count+1;
  // Your code for like goes here
}

function createComment(event) {
  event.preventDefault();
  var commentX = document.createElement("div");
  commentX.textContent = commentBody.value;

  commentX.classList.add("comment");

  comments.appendChild(commentX);
  // Your code for comments goes here
  form.reset()
}
