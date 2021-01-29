const menu = document.querySelector("#menu");

const Elements = document.querySelectorAll(".active-element");


const toggled = menu.addEventListener("click", function () {

    for (var i = 0; i < Elements.length; i++) {

        Elements[i].classList.toggle("active");

    }

})