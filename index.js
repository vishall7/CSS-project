let scrollButton = document.querySelector(".toggle-btn");
let dropDownMenu = document.querySelector(".drop-down-menu");
scrollButton.addEventListener("click", () => {
    dropDownMenu.classList.add("updated-drop-down-menu");
    document.querySelector("header").style.marginBottom = "175px";
    document.querySelector("header").style.transition = "ease 0.5s";

});
