import ProductManager from "./manager/desafio.js";

const manager = new ProductManager();

const env = async () => {
    
    let primerConsulta = await manager.consultarProductos()
    console.log(primerConsulta);

    let producto = {
        title:"Naranjas",
        description: "Jugosas Naranjas neuquinas",
        price:70,
        thumbnail:"",
        code:"abc12565",
        stock:54,
        }

    let result = await manager.crearProducto(producto)
    console.log(result);


    }

env()