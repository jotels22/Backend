class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }

    addProducts(title,description,price){

        let id_product = (this.getProducts()).length

        let product = {
            title: "producto prueba",
            description: "Este es un producto prueba",
            price: 200,
            thumbnail:"Sin imágen",
            code:"abc123",
            stock:25,
            id:id_product++
        }

        this.products.push(product) 
        return this.products
    }

    getProductById(idProducto){
        let producto = this.products.find(evento => producto.id == idProducto)
        if(producto){
            return producto
        } else {
            return null
        }
        
    }

    

    }


