//Ejercicio 1
import fs from 'fs';
//console.log(`Contenido del archivo: ${fs.readFileSync('productos.json', 'utf-8')}`);

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

//Ejercicio 4

import axios from 'axios';

obtenerPais(nombrePais){}
