const lista = document.getElementById("lista");
// axios
//   .get("http://localhost:8080/aula")
//   .then((response) => {
//     response.data.forEach((user) => {
//       lista.innerHTML += `
//                 <li>${user.name}</li>
//             `;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function loadUsers() {
  const response = await axios.get("http://localhost:8080/aula");

  response.data.forEach((user) => {
    lista.innerHTML += `
            <li>${user.name}</li>
        `;
  });
}

loadUsers();

// post precisa body - parametros - passar em formato de objetos e o
// axios converte paraq json
// axios.post("users", {
//   name: "Vini",
//   idade: 18,
//   email: "",
// }); // then e catch
// axios.put("users/1");
// axios.delete("users/1");
