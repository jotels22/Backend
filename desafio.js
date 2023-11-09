const { log } = require("console");
const { title } = require("process");

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }

    addProduct(title,description,price,thumbnail,code,stock,){

        let id_product = (this.getProducts()).length


        let product = {
            title:title,
            description:description,
            price: price,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
            id:id_product++
        }

        // product = {
        //     title:"title",
        //     description:"description",
        //     price: "price",
        //     thumbnail:"thumbnail",
        //     code:"code",
        //     stock:"stock",
        //     id:id_product++
        // }

        this.products.push(product) 
        return this.products
    }

    traerProducto(idProducto){
        let evento = this.eventos.find(event => event.id == idProducto)
        if (evento) {
            return evento
        } else{
            return null
        }
    }

}


const productManagerInstance = new ProductManager();

const producto2 = productManagerInstance.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)

console.log(producto2)


;

