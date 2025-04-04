// The larger Image
const displayedImage = document.querySelector(".displayed-img");
// The smaller Images
const thumbBar = document.querySelector(".thumb-bar");
// The light/dark Button
const btn = document.querySelector("button");
// Overlay for color changing
const overlay = document.querySelector(".overlay");
/* Declaring the array of image filenames */
// array of file namnes for reference
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
// array of altTexts for reference
const altTexts = ["Human eye", "Rocks", "Flowers", "Hieroglyphs", "Butterfly"];
/* Looping through images */
// Update the main image when clicked
function handleThumbnailClick() {
    // Sets the image src to the clicked image"s
    displayedImage.src = this.src; 
    // Sets the alt text to the clicked image"s
    displayedImage.alt = this.alt;
}
// Set image elements for the gallery
for (let i = 0; i < filenames.length; i++) {
    // Creates a new element for each file
    const newImage = document.createElement("img");
    // Sets the src path to each image
    newImage.setAttribute("src", "images/" + filenames[i]);
    // Sets the alt text path to each image
    newImage.setAttribute("alt", altTexts[i]); 
    // Adds the image to the thumpbar"
    thumbBar.appendChild(newImage);
    // Listens for thumpnail clicks
    newImage.addEventListener("click", handleThumbnailClick);
}
/* Wiring up the Darken/Lighten button */
// Control the light/dark mode
function toggleOverlay() {
    // Sets btnClass to the current btn attribute
    const btnClass = btn.getAttribute("class");
    // If btnClass gets the dark attribute
    if (btnClass === "dark") {
        // Set btn attribute to light
        btn.setAttribute("class", "light");
        // Set btn text to "Lighten"
        btn.textContent = "Lighten";
        // Lightens the background overlay
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
     // If btnClass gets the light attribute
    } else {
        // Set btn attribute to dark
        btn.setAttribute("class", "dark");
        // Set btn text to "Darken
        btn.textContent = "Darken";
         // Darkens the background overlay
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
// Calls toggleoverlay when the button is clicked
btn.addEventListener("click", toggleOverlay); 
