//alert("WELCOME!");
const jokes = ["apples", "oranges", "mango", 'banana', "kiwi", "pineapple", "apples1", "oranges2", "mango1", 'banana1', "kiwi1", "pineapple1"];

const links = [
    { text: 'Want More?', href: 'https://www.nature.org/en-us/about-us/where-we-work/united-states/washington/stories-in-washington/dad-jokes-so-bad-youll-want-to-make-like-a-tree-and-leaf/'},

    {
        text: "I'm Useless, I just Reload 😞", href: 'index2.html'
    },
];

const navbar = document.querySelector('#navbar');
//console.log(navbar)
navbar.setAttribute('style', "font-weight:bold");
navbar.style.height = "100% !important";
navbar.classList.add('flex-around');
// const anchors = document.querySelectorAll('a');
// console.log(anchors)
//lastElement3.classList.add("right")

//console.log(navbar)


for (let i = 0; i < links.length; i++) {
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", links[i].href)
    linkElement.textContent = (links[i].text);
    navbar.appendChild(linkElement);
    //console.log(lastElement);
}//was setting the anchor tag and then appending it to the navbar

const allAnchors = navbar.querySelectorAll("a");
const lastAnchor = allAnchors[allAnchors.length - 1];
lastAnchor.setAttribute('class', 'right')
//console.log("Last anchor tag:", lastAnchor);

const myList = document.querySelector("#div1");
const firstElement = myList.firstElementChild;
//console.log(firstElement);
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("reset-btn");
const para = document.querySelector("p");

function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * jokes.length);

    const randomWord = jokes[randomIndex];

    para.textContent = `Random Word: ${randomWord}`;

}//the idea was to generate a random word as it pulls from the created array
generateButton.addEventListener("click", generateRandomWord);

resetButton.addEventListener ("click", () => {
    let resetjokes = []
    para.textContent = " ";
    console.log("Jokes array reset:", jokes);
})//need the reset button to reset the content of text everytime it was clicked