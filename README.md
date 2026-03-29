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

/* const fechaHora = () => {
    console.log(dayjs().get('month', 3).month()) // get & set
}
fechaHora() */


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
import axios from 'axios'

async function obtenerPais(nombrePais) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)

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


//Ejercicio 6

function generarArchivo() {
    const leer = fs.readFileSync('productos.json', 'utf-8');
    let dataDeljson = JSON.parse(leer);

    let archivoCsv = "nombre,precio\n";

    dataDeljson.forEach(producto => {
        archivoCsv += `${producto.nombre},${producto.precio}\n`;
    });

    fs.writeFileSync("productos.csv", archivoCsv, "utf-8");
}

generarArchivo();


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
