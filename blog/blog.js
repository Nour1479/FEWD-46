var link = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");
var form = document.querySelector("#new-comment");
var newComment = document.querySelector("#new-comment");
var newCommentBody = document.querySelector("#new-comment-body");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
    event.preventDefault();
    var count = parseInt(likeCount.textContent);
    likeCount.textContent = count+1;
  // Your code for like goes here
}

function createComment(event) {
  event.preventDefault();
  var commentX = document.createElement("div");
  commentX.setAttribute("class", "comment");
  commentX.textContent = commentBody.value;
  comments.appendChild(commentX);
  // Your code for comments goes here
}
