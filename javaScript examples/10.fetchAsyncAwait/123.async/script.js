//getting data from JSON
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

//getting data from API
fetch("https://api.github.com/users/gauravtakbhate11/repos")
  .then((response) => response.json())
  .then((data) => console.log(data));

//geting text
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));
 