const fruits = ["apples", "oranges", "mango", 'banana', "kiwi", "pineapple"];
const navbar = document.querySelector('#navbar');
navbar.style.backgroundColor = 'var(--navbar';
navbar.style.height = "100%";
//console.log(navbar)

const anchorElement = document.querySelectorAll("a");
for (let i = 0; i < anchorElement.length; i++) {
    const anchor = anchorElement[i];
    console.log(anchor)
}
const listItem = document.createElement("li");
const myList = document.getElementById("div1");
function addListItem() {
    for (let i = 0; i < 1; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        const myList = document.getElementById("div1");
        myList.appendChild(listItem)
    }
}
addListItem()

const generateButton = document.getElementById("generateButton")
function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomWord = fruits[randomIndex];
    const listItem2 = document.createElement("li");
    const myList2 = document.getElementById("div1");
    listItem2.textContent = randomWord;
    myList2.appendChild(listItem2)
}
generateButton.addEventListener("click", generateRandomWord);

;