const jokes = ["apples", "oranges", "mango", 'banana', "kiwi", "pineapple"];
const navbar = document.querySelector('#navbar');
navbar.style.backgroundColor = 'var(--navbar';
navbar.style.height = "100%";
//console.log(navbar)

const anchorElement = document.querySelectorAll("a");
for (let i = 0; i < anchorElement.length; i++) {
    const anchor = anchorElement[i];
    console.log(anchor)
}
// const listItem = document.createElement("li");
const myList = document.querySelector("#div1");
// function addListItem() {
//     for (let i = 0; i < 0; i++) {
//         const listItem = document.createElement("li");
//         listItem.textContent = fruits[i];
//         const myList = document.getElementById("div1");
//         myList.appendChild(listItem)
//     }
// }
// addListItem()


const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("reset-btn");
const para = document.querySelector("p");

function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * jokes.length);

    const randomWord = jokes[randomIndex];

    para.textContent = `Random Word: ${randomWord}`;

}
generateButton.addEventListener("click", generateRandomWord);


