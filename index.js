//Ejercicio 1
import fs from 'fs';
//console.log(`Contenido del archivo: ${fs.readFileSync('productos.json', 'utf-8')}`)

//Ejercicio 3
import dayjs from 'dayjs';

function fechaHora() {
    const d = dayjs();
    const year = d.get('year');
    const month = d.get('month') + 1;
    const day = d.get('date');
    const hour = d.get('hour');
    const minute = d.get('minute');
    const second = d.get('second');
    console.log(`Fecha y hora actual: ${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year} ${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}`);
}

// Llamada a la función
fechaHora();

/////////////////////////////////

const fechaHora = () => {
    console.log(dayjs().get('month', 3).month()) // get & set
}
fechaHora()


//PARTE MELMAN


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
