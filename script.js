let menuBtn = document.querySelector("#phone-menu");
let navBar = document.querySelector("nav");

menuBtn.addEventListener("click", function()
{

    if(navBar.style.display === "none")
    {
        return navBar.style.display = "block";
    }

    else
    {
        return navBar.style.display = "none";
    }
})
