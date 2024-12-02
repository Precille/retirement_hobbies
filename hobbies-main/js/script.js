document.getElementById('hobbyCategories').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var list = document.getElementById('hobbyCategoriesList');
    // Toggle the display property
    list.style.display = (list.style.display === 'block') ? 'none' : 'block';
});

// Optional: Click outside to close the dropdown
window.addEventListener('click', function(event) {
    var list = document.getElementById('hobbyCategoriesList');
    if (!event.target.closest('li')) {
        list.style.display = 'none'; // Close the dropdown if clicked outside
    }
});



