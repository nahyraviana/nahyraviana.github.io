/*jshint esversion: 7 */

/*Date display*/

const datefield = document.querySelector(".date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

let year = document.querySelector("#year");
const currentYear =  now.getFullYear();
year.textContent= currentYear;

/*Footer Last modified*/

let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;


