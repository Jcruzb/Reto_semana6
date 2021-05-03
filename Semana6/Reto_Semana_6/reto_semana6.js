divContenido = document.getElementById("contenido");

let boton = document.getElementById("botonAgregar");
let arreglo = [];
boton.addEventListener("click",function(e){
        let texto = document.getElementById("text").value;
        arreglo.push(texto);
        console.log(arreglo);
    });
