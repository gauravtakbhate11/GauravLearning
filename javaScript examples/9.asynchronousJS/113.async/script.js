const btn = document.querySelector("button");

function toggle(e) {
  e.target.classList.toggle("danger");
}

const posts = [
  { title: "post one", body: "This is Post one" },
  { title: "post two", body: "This is Post two" },
];

function createPost(post,cb) {
  setTimeout(() => {
    posts.push(post)
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

btn.addEventListener("click", toggle);

createPost({ title: "post three", body: "This is Post three" },getPosts);

