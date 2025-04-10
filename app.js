// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Simular lectura de datos con callback
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Simular escritura de datos con callback
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        biblioteca = nuevosDatos;
        callback("Datos guardados exitosamente.");
    }, 1000);
}

// Mostrar todos los libros
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("\n📚 Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} [${libro.genero}] (${libro.disponible ? '✅ Disponible' : '❌ Prestado'})`);
        });
    });
}

// Agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    leerDatos((datos) => {
        datos.libros.push(nuevoLibro);
        escribirDatos(datos, (mensaje) => {
            console.log(`\n📘 Libro agregado: "${titulo}"`);
            console.log(mensaje);
        });
    });
}

// Cambiar disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
        const libro = datos.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            escribirDatos(datos, (mensaje) => {
                console.log(`\n🔁 Disponibilidad actualizada: "${titulo}" ahora está ${nuevoEstado ? '✅ disponible' : '❌ prestado'}`);
                console.log(mensaje);
            });
        } else {
            console.log(`\n⚠️ Libro no encontrado: "${titulo}"`);
        }
    });
}

// 🧪 Pruebas de ejecución (se ejecutan con delay por los setTimeout)
mostrarLibros();

setTimeout(() => {
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
}, 2000);

setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 4000);

setTimeout(() => {
    mostrarLibros();
}, 6000);
