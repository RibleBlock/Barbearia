let isApplied = false

if(screen.width > 700) {
    window.addEventListener("scroll", () => {
        let top = this.scrollY;
        let header = document.querySelector("header .container");
        let logo = document.querySelector("div.logo");
        let navHeader = document.querySelectorAll("ul#header-desktop a")
        let timeout = 500
    
        if (top > 90 && !isApplied) {
            isApplied = true
            // * HEADER 
    
            let headerAnim = header.animate([
                {},
                {height: '100px',backgroundColor: 'rgba(0,0,0,0.85)'}
            ],timeout)
    
            headerAnim.addEventListener('finish',e => {
                header.style.cssText += "height: 100px;background-color:rgba(0,0,0,0.85);";
            })
    
            // *
    
            // * NAV
    
            for (let elem of navHeader) {
                let elemAnim = elem.animate([
                    {},
                    {fontSize: '1rem'}
                ],timeout)
    
                elemAnim.addEventListener('finish',e => {
                    elem.style.cssText += "font-size: 1rem;--distance:24px;";
                })
            }
    
            // * 
    
            // * LOGO 
    
            let logoAnim = logo.animate([
                {backgroundImage: "url('../assets/img/minimalist.png')"},
                {width: '90px',paddingTop: '90px',backgroundImage: "url('../assets/img/minimalist.png')"}
            ], timeout)
    
            logoAnim.addEventListener('finish',e => {
                logo.style.cssText += "width: 90px;padding-top: 90px;background-image: url('../assets/img/minimalist.png')";
            })
    
            // *
    
        } else if (top < 90 && isApplied) {
            isApplied = false
            // * HEADER
    
            let player = header.animate([
                {},
                {height: '200px',background: 'rgba(0,0,0,0)'}
            ],timeout)
    
            player.addEventListener('finish',e => {
                header.style.cssText += "height: 200px;background-color:rgba(0,0,0,0);";
            })
    
            // *
    
            // * NAV
    
            for (let elem of navHeader) {
                let elemAnim = elem.animate([
                    {},
                    {fontSize: '1.2rem'}
                ],timeout)
    
                elemAnim.addEventListener('finish',e => {
                    elem.style.cssText += "font-size: 1.2rem;--distance:30px;";
                })
                // elem.style.cssText += "font-size: 1rem;--distance:24px;";
                
            }
    
            // *
    
            // * LOGO
    
            let logoAnim = logo.animate([
                {backgroundImage: "url('../assets/img/logo.png')"},
                {width: '125px',paddingTop: '125px',backgroundImage: "url('../assets/img/logo.png')"}
            ], timeout)
    
            logoAnim.addEventListener('finish',e => {
                logo.style.cssText += "width: 125px;padding-top: 125px;background-image: url('../assets/img/logo.png')";
            })

            // *
        }
    });
} else {
    let menu = document.getElementById('menu-mobile');
    let headerMobile = document.getElementById('header-mobile')

    let isOpen = false

    menu.addEventListener('click',el => {
        if(isOpen) {
            headerMobile.style.display = 'none'
            isOpen = false
        } else {
            headerMobile.style.display = 'flex'
            isOpen = true
        }
    })

    
}