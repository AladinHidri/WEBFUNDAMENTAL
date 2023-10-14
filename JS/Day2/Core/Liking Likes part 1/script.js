const likeCount = document.querySelector("#likeCount");


let totalLikes = 0;

function like() {
    totalLikes++;
    likeCount.textContent = totalLikes;
}