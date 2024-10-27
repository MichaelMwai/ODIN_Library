const myLibrary = [];

const form = document.getElementById("inputForm");
const addBookButton = document.getElementById("addBook");

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  // the constructor...
}

const submit = document.querySelector("#submit");

addBookButton.addEventListener("click", function () {
  form.style.display = "block"; // Show the form when the button is clicked
  addBookButton.style.display = "none"; // Hide the Add Book button
});
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("bookTitle").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const entry = new Book(name, author, pages);
  myLibrary.push(entry);

  alert("Book added");

  this.reset();
});

console.log(myLibrary);
