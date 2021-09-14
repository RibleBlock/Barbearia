let beardProduct = document.querySelector('#beard-product')
let hairProduct = document.querySelector('#hair-product')

let template = `
<div class="product-wrapper">

    <div class="product-img"><img src="../assets/img/product.png" alt=""></div>
    <div class="product-description">
        <h1>Hair Cut</h1>
        <p>Ele serve para tal coisa e ajuda muito nisso</p>
    </div>
    <div class="price-product">
        <p>R$10,00</p>
    </div>

</div>
`

for(let i = 1; i <= 3; i++) {
    beardProduct.innerHTML += template
    hairProduct.innerHTML += template
}