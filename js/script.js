function openAddItemModal() {
    document.getElementById('addItemModal').style.display = 'flex';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('addItemModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openUpdateModal() {
    document.getElementById('updateModal').style.display = 'flex';
}

function deleteItem() {
    // Add your delete logic here
    console.log("Delete button clicked");
}