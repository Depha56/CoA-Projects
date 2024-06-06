
// Function to handle image source change based on screen size
window.addEventListener("resize", handleResize);

function handleResize() {
  const containers = document.querySelectorAll(".image-container");
  if (window.innerWidth <= 600) {
    containers.forEach((container) => {
      const minImage = container.getAttribute("data-min");
      container.querySelector("img").src = minImage;
    });
  } else {
    containers.forEach((container) => {
      const fullImage = container.getAttribute("data-full");
      container.querySelector("img").src = fullImage;
    });
  }
}
handleResize();

// Function to open modal with full image and details
function openModal(container) {
  const fullImage = container.getAttribute("data-full");
  const title = container.querySelector("h1").innerHTML;
  const location = container.querySelector("p").innerHTML;

  // Set modal content
  document.getElementById("modal-img").src = fullImage;
  document.getElementById("modal-title").innerHTML = title;
  document.getElementById("modal-location").innerHTML = location;

  // Show the modal
  document.getElementById("image-modal").style.display = "block";
}

// Add click event to all image containers
document.querySelectorAll(".image-container").forEach((container) => {
  container.addEventListener("click", () => openModal(container));
});

// Close the modal when the close button is clicked
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("image-modal").style.display = "none";
});
