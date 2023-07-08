const posts = [
  { title: "post one", body: "This is Post one" },
  { title: "post two", body: "This is Post two" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Something Went Wrong");
      }
    }, 2000);
  });
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

function showError(error) {
  const h1 = document.createElement("h1");
  h1.innerHTML = `<strong>${error}</strong>`;
  document.getElementById("posts").appendChild(h1);
}

createPost({ title: "post three", body: "This is Post three" })
  .then(getPosts)
  .catch(showError);
