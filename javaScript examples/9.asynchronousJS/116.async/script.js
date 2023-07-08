const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json");
xhr.open("GET", "https://api.github.com/users/gauravtakbhate11/repos");

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Name : ${repo.name}</strong> - ${repo.description}`;
      document.getElementById("results").appendChild(li);
    });
  }
};

xhr.send();
