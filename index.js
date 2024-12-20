const jokes = ["apples", "oranges", "mango", 'banana', "kiwi", "pineapple"];
const links = [
    { text: 'About', href: '#' },
    {
        text: 'Catalog', href: '#'
    },
    {
        text: 'Orders', href: '#'
    },
    {
        text: 'Account', href: '#'
    },
];


const navbar = document.querySelector('#navbar');
navbar.setAttribute ('style',"height:100%; font-weight:bold; color: #ffffff");
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
}

const allAnchors = navbar.querySelectorAll("a");
const lastAnchor = allAnchors[allAnchors.length - 1];
lastAnchor.setAttribute('class','right')
//console.log("Last anchor tag:", lastAnchor);

const myList = document.querySelector("#div1");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("reset-btn");
const para = document.querySelector("p");

function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * jokes.length);

    const randomWord = jokes[randomIndex];

    para.textContent = `Random Word: ${randomWord}`;

}
generateButton.addEventListener("click", generateRandomWord);


