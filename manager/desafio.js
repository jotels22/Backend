import fs from "fs"
const path = "./files/productos.json"

export default class ProductManager {
    constructor() {
      this.products = [];

    }

    addProducto = (title, description, price,thumbnail, code, stock) => {

        let cantProducto = this.products.length

        if(!title && !description && !price && !code && !stock && !thumbnail){
            return  "todos los datos son requeridos"
        }
        
        const productoCode = this.products.find(producto => producto.code == code)

        if (productoCode) {
            return console.log("Codigo repetido")
        }

        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id:++cantProducto

        }

        this.products.push(producto)
         
        return this.products

    }

  
    getProductos() {
      return this.products;
    }

    getProducto = (idProducto) => {
        const producto = this.products.find(producto => producto.id == idProducto)

        if (producto) {
            return producto;
        }else {
            return "Not found"
            console.log();
        }

    }

    consultarProductos = async () => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, "utf-8")
            const productos = JSON.parse(data)
            return productos
        }
        else {
            return [];
        }
    }


    crearProducto = async (producto) => {
        const productos = await this.consultarProductos(); //[]  o users 
        if (productos.length === 0) {
            producto.id = 1 
        } 
        else {
            producto.id = productos[productos.length-1].id + 1
        }

        productos.push(producto)
        await fs.promises.writeFile(path, JSON.stringify(productos,null,'\t'))
        return productos
    }

    updateProduct = async () => {
        if(fs.existsSync(path)){

            let contenido = fs.readFileSync(path, "utf-8") 
            console.log(contenido)

            
        
        
        }

    }

    deleteProduct = () => {

    }


}

const productManager = new ProductManager();
productManager.updateProduct()


// let producto = productManager.addProducto("Manzanas", "Frescas manzanas de Viedma",30,"","abc123",45333)
// producto = productManager.addProducto("Naranjas", "Jugosas de Rio Cuarto",90,"","abc124",12000)
// producto = productManager.addProducto ("Peras","Ricas peros de Neuquen",35, "","ttr342",40000 )

// console.log(producto);

// producto = productManager.getProducto(4)
// console.log(producto);

// console.log("--------------------------------------------------------------------------------------------");
// ;

