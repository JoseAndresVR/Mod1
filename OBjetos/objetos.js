crearProducto = function () {
    let producto1={
        nombre: "Dorito",
        precio:2.30,
        stock: 2
    },producto2={
        nombre: "Chitos",
        precio:2.50,
        stock: 3
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock>producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    }else if (producto1.stock<producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tienen el mismo stock");

    }

}


