// Code here!!

let productos = [
    {
      imagen:
        "https://consyso.com/wp-content/uploads/2020/02/Camiseta-Polo-Dotaciones-Consyso-SAS.jpg",
      nombre: "Polo Azul",
      precio: 55000,
    },
  
    {
      imagen:
        "https://cdn-images.farfetch-contents.com/17/15/33/85/17153385_34853512_1000.jpg",
      nombre: "Camisa Roja",
      precio: 68000,
    },
  
    {
      imagen:
        "https://www.tiendasjosh.com/wp-content/uploads/2021/04/VIVES03-AZU-4.jpg",
      nombre: "Zapato Mocasín",
      precio: 180000,
    },
  
    {
      imagen:
        "https://www.dhresource.com/0x0/f2/albu/g18/M00/CA/5B/rBNaNmBIi3GAQ3PZAAGlT3rajBM899.jpg/brand-spring-summer-jeans-men-denim-pants.jpg",
      nombre: "Blue-Jean ",
      precio: 85000,
    },
  
    {
      imagen:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/008/632/products/abiman-begro-base-beige-21-dc242e9f9b60e988ac14806903463320-640-0.jpg",
      nombre: "Chaqueta de Cuero",
      precio: 150000,
    },
  
    {
      imagen:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/343/263/products/74-jean-distressed-31-09feb7efcddbb4492315867146270429-640-0.jpg",
      nombre: "Jean negro",
      precio: 90000,
    },
    {
      imagen:
        "https://cdn.shopify.com/s/files/1/0257/8812/1137/products/BLUSAROSA_400x.png?v=1619105779",
      nombre: "Blusa rosa",
      precio: 55000,
    },
  
    {
      imagen: "https://m.media-amazon.com/images/I/61nnaEHIpfL._AC_UL320_.jpg",
      nombre: "Camisa Negra",
      precio: 72000,
    },
  
    {
      imagen:
        "https://static.dafiti.com.co/p/price-shoes-0607-1426661-1-zoom.jpg",
      nombre: "Sandalia Plataforma",
      precio: 170000,
    },
  
    {
      imagen:
        "https://d30o7qbghf97ws.cloudfront.net/itemimage/737790/image/standard-4e9c5d17079292ca338973cad7d5f224.jpg",
      nombre: "Jean rojo",
      precio: 80000,
    },
  
    {
      imagen:
        "https://static.dafiti.com.co/p/la-chamarra-6315-3191061-1-zoom.jpg",
      nombre: "chaqueta de Cuero",
      precio: 135000,
    },
  
    {
      imagen:
        "https://images.ikrix.com/product_images/original/moncler-long-skirts-pleated-skirt-in-melange-grey-00000215591f00s001.jpg",
      nombre: "Falda Gris",
      precio: 86000,
    },
  ]; // lenght 12, 0-5 men : 6-11 women
  
var detalle = JSON.parse(localStorage.getItem("Producto en Detalle"));

let plantilla1 =`
<div id="detalleProducto">
            <img src="${detalle.imagen}" alt="">
            <div id="descripcion">
                <div>
                    <h1>${detalle.nombre}</h1><br>
                    <h3>$${detalle.precio}</h3>
                </div>
                <div>
                    <input type="text" name="" id="cantidadProducto">
                    <input id="agregarAlCarrito" type="button" value="Agregar al Carrito">
                </div>
            </div>
        </div>
        `
document.querySelector("#detalleProducto").innerHTML = plantilla1;


var btnAgregarAlCarrito = document.querySelector("#agregarAlCarrito"); 

btnAgregarAlCarrito.addEventListener("click", capturarInfo = (e) =>{
    e.preventDefault(); 

 /////////////////////////////////////////////////////////////////////////////////////
      
      let cantidadProducto = parseInt(document.querySelector("#cantidadProducto").value);   
      var entryImagen = detalle.imagen
      var entryNombre = detalle.nombre
      var entryPrecio = detalle.precio

      let entry = {
        "imagen": entryImagen,
        "nombre": entryNombre,
        "precio": entryPrecio,
        "cantidad": cantidadProducto
      }
      //localStorage.setItem("Items actualizados",JSON.stringify(entry));
      detalle.push(entry);
      console.warn(detalle);
      localStorage.setItem("Todos", JSON.stringify(detalle));
    
    ////////
    // location.href = "carrito.html";  
}          
);










