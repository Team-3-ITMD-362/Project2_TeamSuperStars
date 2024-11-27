document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const menuItems = document.querySelectorAll('.menu-item');
    const resetButton = document.getElementById('reset-button'); // Select reset button

    // Display all items by default
    menuItems.forEach(item => item.style.display = 'block');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            const filter = button.getAttribute('data-filter');

            // Apply filtering logic
            menuItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update active class for buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Reset button logic
    resetButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        // Show all items
        menuItems.forEach(item => item.style.display = 'block');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
    });
});
