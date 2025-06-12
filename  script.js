// Function to change the main product image when a thumbnail is clicked
function changeImage(mainImageId, newImageUrl) {
    const mainImage = document.getElementById(mainImageId);
    if (mainImage) {
        mainImage.src = newImageUrl;
    }

    // Optional: Add/remove 'active' class for styling active thumbnail
    const thumbnails = document.querySelectorAll('.product-gallery .thumbnails img');
    thumbnails.forEach(thumb => {
        if (thumb.src === newImageUrl || thumb.dataset.src === newImageUrl) { // Check both src and potential data-src
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Function to handle scroll and show/hide product detail sections (for one-page concept)
document.addEventListener('DOMContentLoaded', () => {
    const productDetailSections = document.querySelectorAll('.product-detail');

    // Hide all product detail sections initially
    productDetailSections.forEach(section => {
        section.style.display = 'none';
    });

    // Add click listener to "Lihat Detail" buttons
    const detailButtons = document.querySelectorAll('.product-card .secondary-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor jump

            const targetId = button.getAttribute('href'); // Get the ID like #detail-serum
            const targetSection = document.querySelector(targetId);

            // Hide all product detail sections first
            productDetailSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked product detail section
            if (targetSection) {
                targetSection.style.display = 'block';
                // Scroll to the section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Optional: Set the first thumbnail as active on page load for initial display
    const firstThumbnails = document.querySelectorAll('.product-gallery .thumbnails img:first-child');
    firstThumbnails.forEach(thumb => {
        thumb.classList.add('active');
    });
});