console.clear();
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

function toggleBookmark() {
  bookmarkButton.classList.toggle("bookmark--active");
}

bookmarkButton.addEventListener("click", toggleBookmark);
