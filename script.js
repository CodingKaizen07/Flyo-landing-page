let menuBtn = document.querySelector(".menu-btn");
let navBar = document.querySelector("#phone-nav");
let body = document.querySelector("body")
let navLinks = document.querySelectorAll("#phone-nav .nav-links")
let menuOpen = false;



console.log(navLinks)

    navLinks.forEach(link => {
        link.addEventListener("click", (j) => {
            
            console.log("link clicked")
            body.style.overflow = "unset"

            menuBtn.classList.remove('open');
            menuOpen = false;
    
            navBar.style.width = "0px"
            setTimeout(() => {
                navBar.style.display = "none"
            }, 100)
        })
    })


menuBtn.addEventListener("click", function()
{

    console.log(navBar.style.display)
    console.log(navBar.style.width)
    console.log(navBar)

    if(navBar.style.width === "100%")
    {

        body.style.overflow = "unset"

        menuBtn.classList.remove('open');
        menuOpen = false;

        navBar.style.width = "0px"
        setTimeout(() => {
            navBar.style.display = "none"
        }, 100)
    }

    else
    {
        body.style.overflow = "hidden"


        menuBtn.classList.add('open');
        menuOpen = true;

        navBar.style.display = "block"
        
        setTimeout(() => {
            navBar.style.width = "100%"
        }, 10)

    }
})
