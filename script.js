// Handle registration form submission
const form = document.querySelector("#register form");
const tableBody = document.querySelector("#data-table tbody");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const dept = document.querySelector("#dept").value;
    const event = document.querySelector("#event").value;
    const year = document.querySelector("#year").value;

    const user = { name, dept, event, year };

    // Get existing data
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    form.reset();
    displayUsers();
  });
}

function displayUsers() {
  if (!tableBody) return;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  tableBody.innerHTML = "";
  users.forEach((u) => {
    const row = `<tr>
      <td>${u.name}</td>
      <td>${u.dept}</td>
      <td>${u.event}</td>
      <td>${u.year}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", displayUsers);
