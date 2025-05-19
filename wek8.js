document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (title && content) {
    const newPost = document.createElement("article");
    newPost.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = content;

    newPost.appendChild(postTitle);
    newPost.appendChild(postContent);

    document.getElementById("blog-posts").prepend(newPost);

    // Clear the form
    document.getElementById("postForm").reset();
  }
});
