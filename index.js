console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answereButton = document.querySelector('[data-js="button-answere"]');
const answereQuestion = document.querySelector('[data-js="answere"]');

// This is for the bookmark toggle feature

function toggleBookmark() {
  bookmarkButton.classList.toggle("bookmark--active");
}

bookmarkButton.addEventListener("click", toggleBookmark);

// This is for the answere toggle feature

function toggleAnswere() {
  answereQuestion.classList.toggle("card__answer--active");
}

answereButton.addEventListener("click", toggleAnswere);
