const userDropdown = document.getElementById("userTodos");
const userTable = document.getElementById("userTable");

const userurl = `http://localhost:8083/api/users`;

fetch(userurl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const userOptions = new Option(user.name, user.id);
      userDropdown.appendChild(userOptions);
    });
  });

userDropdown.addEventListener("change", () => {
  const currentUser = userDropdown.value;

  const tbody = userTable.querySelector("tbody");
  tbody.innerHTML = "";

  if (!currentUser) {
    tbody.innerHTML = "";
  }

  const todourl = `http://localhost:8083/api/todos/byuser/${currentUser}`;

  fetch(todourl)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        const tbody = userTable.querySelector("tbody");

        const row = tbody.insertRow();

        const cellCategory = row.insertCell();
        cellCategory.innerHTML = user.category;

        const cellDesc = row.insertCell();
        cellDesc.innerHTML = user.description;

        const cellDeadline = row.insertCell();
        cellDeadline.innerHTML = user.deadline;

        const cellPriority = row.insertCell();
        cellPriority.innerHTML = user.priority;

        const cellStatus = row.insertCell();
        cellStatus.innerHTML = user.completed;
      });
    });
});
