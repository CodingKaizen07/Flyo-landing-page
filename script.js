let menuBtn = document.querySelector("#phone-menu");
let navBar = document.querySelector("nav");

menuBtn.addEventListener("click", function()
{

    if(navBar.style.display === "block")
    {
        return navBar.style.display = "none";
    }

    else
    {
        return navBar.style.display = "block";
    }
})
