let gallery = document.querySelectorAll('div.gallery-wrapper div.img')

for(photo of gallery) {
    console.log(photo)
    photo.style.cssText = `background-image: url('../assets/img/carrousel.jpg');background-size: cover;background-position: center center;`
}