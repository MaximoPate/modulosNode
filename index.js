 //Ejercicio 1 
import fs from 'fs'; 

console.log(`Contenido del archivo: ${fs.readFileSync('productos.json', 'utf-8')}`)



//Ejercicio 2

const agregarProducto = (nombre, precio) => { 
    const contenido = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(contenido);
    productos.push({ nombre, precio });
    fs.writeFileSync('productos.json', JSON.stringify(productos));
}

//EJEMPLO 
agregarProducto('Pilas AAA', 400); 
console.log(`Contenido del archivo: ${fs.readFileSync('productos.json', 'utf-8')}`);

 

//Ejercicio 3 

import dayjs from 'dayjs';

// Función para mostrar fecha y hora actual con formato
const mostrarFechaHora = () => {
  const ahora = dayjs();
  const fechaActual = ahora.format('DD/MM/YYYY');
  const horaActual = ahora.format('HH:mm');

  console.log(`Fecha actual: ${fechaActual}`);
  console.log(`Hora actual: ${horaActual}`);
}

// Llamada a la función 
mostrarFechaHora();



//Ejercicio 4 

async function obtenerPais(nombrePais) { try { const response = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)

    const data = response.data
    const pais = data[0]

    console.log("País:", pais.name.common);
    console.log("Capital:", pais.capital[0]);
    console.log("Región:", pais.region);
    console.log("Población:", pais.population);
} catch (error) {
    console.error("Error al obtener el país:", error.message)
}
}

obtenerPais("Argentina")
 

//Ejercicio 5

const buscarProducto = (nombre) => { 
    const contenido = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(contenido);
    const productoEncontrado = productos.find(producto => producto.nombre === nombre);
    
    if (productoEncontrado) {
        console.log("Producto encontrado");
        console.log(`Nombre: ${productoEncontrado.nombre}`);
        console.log(`Precio: ${productoEncontrado.precio}`);
    } else {
        console.log("Producto no encontrado");
    }
}

// EJEMPLO
buscarProducto("Mouse");


//Ejercicio 6

function generarArchivo() { 
const leer = fs.readFileSync('productos.json', 'utf-8'); let dataDeljson = JSON.parse(leer);

let archivoCsv = "nombre,precio\n";

dataDeljson.forEach(producto => {
    archivoCsv += `${producto.nombre},${producto.precio}\n`;
});

fs.writeFileSync("productos.csv", archivoCsv, "utf-8");
}

generarArchivo();


 

//Ejercicio 7

let contador = 1;

const interval = setInterval(() => {
    console.log(contador);
    if (contador === 10) {
        clearInterval(interval);
        console.log("Fin del contador");
    }
    contador++;
}, 1000); 



//Ejercicio 8

function analizarTexto(texto) {
    const caracteres = texto.length;
    const palabras = texto.split(' ').length;
    
    const textoLower = texto.toLowerCase();
    let vocales = 0;
    let consonantes = 0;
    
    for (let i = 0; i < textoLower.length; i++) {
        const char = textoLower[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vocales++;
        } else if (char >= 'a' && char <= 'z') {
            consonantes++;
        }
    }
    
    console.log({caracteres, palabras, vocales, consonantes});
}

analizarTexto("Hola mundo");  