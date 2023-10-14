const likeCount1 = document.querySelector("#likeCount1");
const likeCount2 = document.querySelector("#likeCount2");
const likeCount3 = document.querySelector("#likeCount3");


let totalLikes1 = 0;
let totalLikes2 = 0;
let totalLikes3 = 0;

function likeFirst() {
    totalLikes1++;
    likeCount1.textContent = totalLikes1;
}

function likeSecond() {
    totalLikes2++;
    likeCount2.textContent = totalLikes2;
}

function likeThird() {
    totalLikes3++;
    likeCount3.textContent = totalLikes3;
}