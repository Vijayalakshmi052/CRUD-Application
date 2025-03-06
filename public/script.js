document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        let table = document.getElementById("userList");

        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = name;
        cell2.textContent = email;
        cell3.innerHTML = `
            <div class="action-buttons">
                <button onclick="deleteUser(this)">Delete</button>
                <button onclick="editUser(this)">Edit</button>
            </div>
        `;

        document.getElementById("userForm").reset();
    }
});

function deleteUser(btn) {
    let row = btn.closest("tr");
    row.remove();
}

function editUser(btn) {
    let row = btn.closest("tr");
    let name = row.cells[0].textContent;
    let email = row.cells[1].textContent;

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;

    row.remove();
}