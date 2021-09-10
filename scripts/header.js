window.addEventListener("scroll", () => {
    let top = this.scrollY;
    let header = document.querySelector("header .container");
    let logo = document.querySelector("div.logo img");
    let navHeader = document.querySelectorAll("ul#header-desktop a")

    if (top >= 90) {
        header.style.cssText += "height: 100px;background-color:rgba(0,0,0,0.85);";
        for (elem of navHeader) {
            elem.style.cssText += "font-size: 1rem;--distance:24px;";
            
        }
        logo.style.cssText += "width: 25%;"
        logo.setAttribute("src","../assets/img/minimalist.png")
    } else {
        header.style.cssText += "height: 200px;background-color:rgba(0,0,0,0);";
        for (elem of navHeader) {
            elem.style.cssText += "font-size: 1.2rem;--distance:30px;";

        }
        logo.style.cssText += "width: 35%;"
        logo.setAttribute("src","../assets/img/logo.png")

    }
});