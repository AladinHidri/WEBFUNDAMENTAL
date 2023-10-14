const likeCount1 = document.querySelector("#likeCount1");
const likeCount2 = document.querySelector("#likeCount2");
let login = document.querySelector("#login")

let totalLikes1 = 0;
let totalLikes2 = 0;

function likeFirst() {
    totalLikes1++;
    likeCount1.textContent = totalLikes1;
    alert("This Page Says\n Ninja was licked")
}

function likeSecond() {
    totalLikes2++;
    likeCount2.textContent = totalLikes2;
    alert("This Page Says\n Ninja was licked")
}
function addDefinition(element) {
    element.style.display = "none";
}
function tggleLogin() {
    if (login.textContent === "Login") {
        login.textContent = "Logout";
    } else {
        login.textContent = "Login";
    }
}