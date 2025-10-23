type Product = {
    id:number,
    name:string,
    price:number,
    in_stock:boolean
}

const product1:Product = {
    id: 1,
    name: 'Phone',
    price: 43,
    in_stock: true
}

const product2:Product = {
    id: 2,
    name: 'Charger',
    price: 25,
    in_stock: false
}

function productInfo(product:Product):string
{
    return `Prdouct [${product.id}]: ${product.name} costs $${product.price}`
}

console.log(productInfo(product1))
console.log(productInfo(product2))