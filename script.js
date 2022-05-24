let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("pagar").innerHTML = ` ${total}€`
}

function pay() {
    window.alert(products.join(", \n"));
}

//-----
function displayProducts(productList){
    let productsHTML = '';
    productList.forEach(element => {
        productsHTML +=
        `<div class="box">
            <h2>${element.name}</h2>
            <button class="buy" onclick="add(${element.id}, ${element.price})">AGREGAR</button>
            <div class="circle"></div>
            <h2>${element.price}€</h2>
            <img src="${element.image}" class="product" alt="blackshirt">
        </div>`
    });
    document.getElementById('container').innerHTML = productsHTML;
}

window.onload = async() => {
    console.log("fetch");
    const productList = await (await fetch("/api/products")).json();
    console.log(productList)
    displayProducts(productList)
}