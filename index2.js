//alert("WELCOME!");
const jokes = ["Why don’t eggs tell jokes?:  Because they might crack up.", "What does a lemon say when it answers the phone?: Yellow!", "Why couldn’t the leopard play hide and seek?: Because he was always spotted", "What do you call fake spaghetti?: An impasta!", "Why did the coffee file a police report?: It got mugged.", "What did the horse say after it tripped?: Help! I’ve fallen and I can’t giddyup!", "Why can’t you hear a pterodactyl going to the bathroom?: Because the 'P' is silent.", "What do you call an angry carrot?: A steamed veggie.", "Where do polar bears keep their money?: In a snowbank.", "What would bears be without bees?: Ears!", "What do you call a pile of cats?: A meow-ntain.", "Why do cows wear bells?: Because their horns don’t work.",
    "Why did the bicycle fall over?:  Because it was two tired.", "What did the triangle say to the circle?:  You’re pointless.", "What do lawyers wear to court?: Lawsuits.", "What do elves learn in school?:  The elf-abet.", "What did one toilet say to another?: You look flushed.", "What lights up a soccer stadium?: A soccer match.", "What does corn say when it gets a compliment?: Aw, shucks!", "What’s red and bad for your teeth?: A brick.", "What do sprinters eat before they race?: Nothing. They fast.", "Why was the fish’s grades bad?: They were below sea level.",
    "What’s Forrest Gump’s password?:  1forrest1.", "What do you call a fish without an eye?:  Fsh.....", "Why shouldn't you use a broken pencil?: Because it's pointless.", "What do you call a pig that practices karate?:  A pork chop.",
    "I’ve been hearing news about this big boolean.: Huge if true.", "What diet did the ghost developer go on?: Boolean", "Why was the developer unhappy at their job?: They wanted arrays.", "Why was the function sad after a successful first call?: It didn’t get a callback."
];
// console.log(jokes.length) = 26

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
const firstElement = myList.firstElementChild;//Use the parent-child-sibling relationship to navigate between elements at least once
//console.log(firstElement);
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("reset-btn");
const para = document.querySelector("p");

function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * jokes.length);

    const randomWord = jokes[randomIndex];

    para.textContent = ` ➡️ ${ randomWord }`;

}//the idea was to generate a random word as it pulls from the created array
generateButton.addEventListener("click", generateRandomWord);

resetButton.addEventListener ("click", () => {
    let resetjokes = []
    para.textContent = " ";
    console.log("Jokes array reset:", jokes);
})//need the reset button to reset the content of text everytime it was clicked