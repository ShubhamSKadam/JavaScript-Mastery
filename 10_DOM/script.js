const menuClicked = (currEl) => {
    const menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    currEl.classList.add("active");
};
