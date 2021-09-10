let a = document.querySelectorAll("ul#header-desktop a");

for(let i = 0; i < a.length; i++) {
    if(a[i].getAttribute("class") === "active") {
        a[i].style.cssText += "--is-visible:visible;--is-opacity:1;"
    } else {
        a[i].addEventListener("mouseover",e => {
            a[i].style.cssText += "--is-visible:visible;--is-opacity:1;"
        })
        a[i].addEventListener("mouseout",e => {
            a[i].style.cssText += "--is-visible:hidden;--is-opacity:0;"
        })
    }
}
