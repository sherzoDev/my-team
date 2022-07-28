let changerLi = document.querySelectorAll(".director-item");
let changerBtn = document.querySelectorAll('.director-item__changer-btn');
changerBtn.forEach(function (bnts) {
    bnts.addEventListener("click", function () {
        changerLi.forEach(function (item) {
            item.classList.remove("director-item--active");
        })
        bnts.parentElement.classList.add("director-item--active");
    })
})