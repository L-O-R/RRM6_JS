let loading = true;
const container = document.getElementById("root");
try {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(
          "data was not fetched from backend"
        );
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);

      container.innerHTML = "";
      data.forEach((todo) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <h1> ${todo.title}</h1>
        `;

        container.appendChild(div);
      });
    });
} catch (error) {
  console.log(error);
} finally {
  loading = false;
}

console.log("hello");
