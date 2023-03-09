// RELOJ
document.querySelector("#submitrg1").addEventListener("click", e => {
e.preventDefault();

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "573172171691";

let refrg1 = document.querySelector("#refrg1").textContent;
let rg1 = document.querySelector("#rg1").textContent;
let preciorg1 = document.querySelector("#preciorg1").textContent;

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
*_Bienvenidos a Mimooi_*%0A%0A
*Sección Relojes*%0A%0A
*Tu compra:*%0A%0A
*Ref del producto:*%0D
${refrg1}%0A%0A
*Nombre del producto:*%0D
${rg1}%0A%0A
*Precio:*%0D
${preciorg1}%0A%0A`;

window.open(url);    
});


document.querySelector("#submitrg2").addEventListener("click", e => {
e.preventDefault();

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "573172171691";

let refrg2 = document.querySelector("#refrg2").textContent;
let rg2 = document.querySelector("#rg2").textContent;
let preciorg2 = document.querySelector("#preciorg2").textContent;

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
*_Bienvenidos a Mimooi_*%0A%0A
*Sección Relojes*%0A%0A
*Tu compra:*%0A%0A
*Ref del producto:*%0D
${refrg2}%0A%0A
*Nombre del producto:*%0D
${rg2}%0A%0A
*Precio:*%0D
${preciorg2}%0A%0A`;

window.open(url);    
});


