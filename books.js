let titles = document.getElementsByClassName("title");
for (let i = 0; i < titles.length; i++) {
  titles[i].onclick = showBook;
}
function showBook(event) {
    let title = event.target

let toShow = title.nextElementSibling;

toShow.classList.toggle("open")
title.classList.toggle("minus")
}   
