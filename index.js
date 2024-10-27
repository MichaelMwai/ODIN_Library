const myLibrary = [];

const form = document.getElementById("inputForm");

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  // the constructor...
}

const submit = document.querySelector("#submit");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("bookTitle").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const entry = new Book(name, author, pages);
  myLibrary.push(entry);

  alert("Book added");
});

console.log(myLibrary);
