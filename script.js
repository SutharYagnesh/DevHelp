
document.getElementById("loadMore").addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll(".card-item.d-none");
    let count = 0;
    hiddenCards.forEach(card => {
        if (count < 4) {
            card.classList.remove("d-none");
            count++;
        }
    });
    if (document.querySelectorAll(".card-item.d-none").length === 0) {
        this.style.display = "none";
    }
});


document.getElementById("loadMoreUI").addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll(".card-item.d-none");
    let count = 0;
    hiddenCards.forEach(card => {
        if (count < 4) {
            card.classList.remove("d-none");
            count++;
        }
    });
    if (document.querySelectorAll(".card-item.d-none").length === 0) {
        this.style.display = "none";
    }
});

