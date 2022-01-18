// const text = document.getElementsByClassName("text");
// console.log("text", text);
const  text = document.querySelector(".text");
console.log("text", text);


// const loadButton = document.getElementById("load");
// console.log(loadButton);

const  loadButton = document.querySelector("#load");
console.log(loadButton);

const title = document.querySelector("h1");
console.log("title", title);
console.log(title.style);

title.style.fontFamily = "Helvetica";

// jQuery utilise querySelector
function $(elementName) {
    return document.querySelector(elementName);
}
console.log("H1:", $("h1"));

// const all = document.querySelector("*");
// console.log(all);

//all body
// const all = document.querySelector("body");
// console.log(all.innerHTML);

//Find names of elements: JavaScript HTML DOM Events
// Event Listener
loadButton.addEventListener("click", () => {
    
    const section = document.querySelector("section");

    //1ere facon: add p into section
    const p = "<p>Data loaded!</p>";
    section.innerHTML += p;

    //2e facon: add p into section
    const p2 = document.createElement("p");
    p2.textContent = "Data loaded";
    section.appendChild(p2);
})

//Requetes a un serveur: fetch exist dans navigateur
//axios.get; $(""); $.ajax
// json: JavaScript Object Notation: prend tous les objets
// 1ere facon
// fetch("https://restcountries.com/v3.1/all")
// .then(res => res.json())
// .then((countries) => {
//     console.log(countries);
// }) 

// const data = fetch("https://restcountries.com/v3.1/all")
// console.log(data);

//Async / Await
// function getCountries() {
// // https://restcountries.com/v3.1/all
//     const data;
//     return data;
// }
// console.log("1");
// const countries = getCountries();
// console.log(countries);

// fetch().then((res) => {
//     console.log(countries);
// })
// console.log("2");

//await / to wait
const countries = await getCountries();
// console.log("2");

function sayHello() {
    console.log("hello");
}

//ne sert a rien sur les fonctions synchrones
const countries = await sayHello();
console.log("....");

//Async / Await
//2e facon (like with .map)
async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return countries;
}


async function startProgram() {
    const countries = await getCountries();
    console.log(countries);
}
startProgram();
