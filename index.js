








document.addEventListener("DOMContentLoaded", displayBooks()); //event listener forloaded document



function displayBooks(){
    let displayBlock = document.getElementById("display-books");
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(function(data){
        for(book of data){
            let bookContainer = document.createElement("h2");
            let buttons = document.createElement("input")
            buttons.setAttribute("type", "submit")
            buttons.className = "info-button";
            buttons.addEventListener("submit", displayInfo());
            bookContainer.textContent = book.name;
            bookContainer.appendChild(buttons);
            displayBlock.appendChild(bookContainer);
        }
    })
}


function displayInfo(){
    console.log("working");
}