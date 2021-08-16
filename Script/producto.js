// Code here !!
let productoAImprimir = JSON.parse(localStorage.getItem("Datos"));

let plantilla =`
<section class="productosVenta">
<div><img id="imagen1" src="${productoAImprimir[0].imagen}" alt=""> <p>${productoAImprimir[0].nombre}</p><p>$${productoAImprimir[0].precio}</p></div>
<div><img id="imagen2" src="${productoAImprimir[1].imagen}" alt=""> <p>${productoAImprimir[1].nombre}</p><p>$${productoAImprimir[1].precio}</p></div>
<div><img id="imagen3" src="${productoAImprimir[2].imagen}" alt=""> <p>${productoAImprimir[2].nombre}</p><p>$${productoAImprimir[2].precio}</p></div>
<div><img id="imagen4" src="${productoAImprimir[3].imagen}" alt=""> <p>${productoAImprimir[3].nombre}</p><p>$${productoAImprimir[3].precio}</p></div>
<div><img id="imagen5" src="${productoAImprimir[4].imagen}" alt=""> <p>${productoAImprimir[4].nombre}</p><p>$${productoAImprimir[4].precio}</p></div>
<div><img id="imagen6" src="${productoAImprimir[5].imagen}" alt=""> <p>${productoAImprimir[5].nombre}</p><p>$${productoAImprimir[5].precio}</p></div>          
</section>
`

document.querySelector(".productosVenta").innerHTML = plantilla;
////////////////////////////////////
// codigo de enlace a página de detalle

let enlace1 = document.querySelector("#imagen1");
enlace1.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[0]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);

    location.href = "detalleProducto.html";
});

let enlace2 = document.querySelector("#imagen2");
enlace2.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[1]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);
    
    location.href = "detalleProducto.html";
});


let enlace3 = document.querySelector("#imagen3");
enlace3.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[2]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);
    
    location.href = "detalleProducto.html";
});

let enlace4 = document.querySelector("#imagen4");
enlace4.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[3]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);
    
    location.href = "detalleProducto.html";
});

let enlace5 = document.querySelector("#imagen5");
enlace5.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[4]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);
   
    location.href = "detalleProducto.html";
});

let enlace6 = document.querySelector("#imagen6");
enlace6.addEventListener("click", cargarDetalle = () =>{
    productoEnDetalle = JSON.stringify(productoAImprimir[5]);
    localStorage.setItem("Producto en Detalle", productoEnDetalle);
  
    location.href = "detalleProducto.html";
});

/*let imagenProducto = productoAImprimir[5].imagen;
    let nombreProducto = productoAImprimir[5].nombre;
    let precioProducto = productoAImprimir[5].precio;

    localStorage.setItem("Imagen", imagenProducto);
    localStorage.setItem("nombre",nombreProducto);
    localStorage.setItem("precio",precioProducto);*/


      
     