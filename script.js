document.addEventListener('DOMContentLoaded', () => {
    const outfitDisplay = document.getElementById('outfit-display');
    const nextOutfitButton = document.getElementById('next-outfit-button');

    // Placeholder for outfit image paths.
    // You'll need to replace these with the actual paths to your images.
    const outfits = [
        'images/outfit1.jpg',
        'images/outfit2.jpg',
        'images/outfit3.jpg',
        'images/outfit4.jpg',
        'images/outfit5.jpg'
    ];

    let currentOutfitIndex = 0;

    // Function to set the initial outfit
    function setInitialOutfit() {
        if (outfits.length > 0) {
            outfitDisplay.src = outfits[currentOutfitIndex];
        } else {
            // Optionally, display a message if there are no outfits
            outfitDisplay.alt = "No outfits to display. Add images to the 'images' folder.";
        }
    }

    // Event listener for the "Next Outfit" button
    nextOutfitButton.addEventListener('click', () => {
        if (outfits.length > 0) {
            // Move to the next outfit, and loop back to the start if at the end
            currentOutfitIndex = (currentOutfitIndex + 1) % outfits.length;
            outfitDisplay.src = outfits[currentOutfitIndex];
        }
    });

    // Set the first outfit when the page loads
    setInitialOutfit();
});
