const redbutton = document.getElementById("generateButton2");
const L = document.querySelector(".label");
t = document.getElementById("choose")
//console.log(t)
//console.log(L)

redbutton.addEventListener("click", (e) => {
    e.preventDefault();
    const labelText = t.value;


    if (labelText === "") {
        window.location.href = './index2.html';
        alert("Please answer the question!!!!! yes or no?");
    } else if (labelText === "yes") {
        window.location.href = './index.html';

    } else {
        window.location.href = './index2.html';
        alert("Well i guess you're stuck here...... Unless you input yes.")
    }
});
redbutton.style.fontSize ="30px";
L.style.fontSize = "20px"; // Increase the font size
t.style.width = "500px"; // Set a specific width
t.style.fontSize = "20px"; // Increase the font size
t.style.padding = "10px"; //padding for more space