let selectedRow = null;

function deleteRow(button) {
    button.closest('tr').remove();
}

function editRow(button) {
    selectedRow = button.closest('tr');
    const cells = selectedRow.children;
    document.getElementById("editId").value = cells[0].textContent;
    document.getElementById("editName").value = cells[1].textContent;
    document.getElementById("editEmail").value = cells[2].textContent;
    document.getElementById("editDept").value = cells[3].textContent;
    document.getElementById("editDate").value = cells[4].textContent;
    document.getElementById("editGender").value = cells[5].textContent;
    document.getElementById("editType").value = cells[6].textContent;
}

function saveChanges() {
    if (!selectedRow) return;
    selectedRow.cells[0].textContent = document.getElementById("editId").value;
    selectedRow.cells[1].textContent = document.getElementById("editName").value;
    selectedRow.cells[2].textContent = document.getElementById("editEmail").value;
    selectedRow.cells[3].textContent = document.getElementById("editDept").value;
    selectedRow.cells[4].textContent = document.getElementById("editDate").value;
    selectedRow.cells[5].textContent = document.getElementById("editGender").value;
    selectedRow.cells[6].textContent = document.getElementById("editType").value;

    selectedRow = null;
}
