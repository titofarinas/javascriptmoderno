const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Control xbox', precio: 80},
    { nombre: 'Microfono blue yeti', precio: 130},
    { nombre: 'Mouse Logitech', precio: 60},
    { nombre: 'Audifonos', precio: 100},
    { nombre: 'Teclado mecanico', precio: 70}
]


//comprobar si existe una valor en el arreglo
let valor = 'Enero'

meses.forEach(mes => {
    if (mes === valor){
        console.log(valor + ' Si existe')
    }
})


const resultado = meses.includes('Diciembre');
console.log(resultado)


//En un arreglo de objetos se utiliza .some

const existe = carrito.some(producto =>{
    return producto.nombre === 'Control xbox';
})

console.log(existe);


// para buscar en un arreglo de objeto se utiliza .some
const encontrado = carrito.some(producto => producto.nombre === 'Control xbox')
console.log(encontrado);