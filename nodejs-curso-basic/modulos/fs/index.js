const fs = require("fs");

fs.writeFile("./text.txt", "Hola, este es un mensaje de prueba.", (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
    return;
  }
  console.log("Archivo escrito exitosamente.");
});

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:", data);
});