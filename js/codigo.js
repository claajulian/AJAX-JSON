setTimeout(() => { // ES COMO EL SET INTERVAL. NECESITA DOS PARAMETRO(FUNCTION Y TIEMPO)
    console.log("codigo asincrono")
}, 2000)
console.log("codigo sincrono")


// Asincronia: Las tareas tienen q esperar que ocurra un suceso. Los eventos
//son asincronos. Hasta que no apretemos algo no ocurre el suceso.

// AJAX: Significa JS asincrono y xml  Trabaja con asincronia. Es una implementacion de JS.
// -> invocamos objeto XHR (XMLHttpRequest)

/**  TE TRAE CONTENIDO COMO POR EJ: HTML, TXT, JSON.
 * 
 xml extensible de html
 json formato notacion de objetos
 html
 txt

 Paso 1: Crear el objeto (xhr)
 Paso 2: Abrir el archivo, que son los de arriba mencionados
 Paso 3: Cargar (onload, o un evento)
 Paso 4: Ejecutar
 Paso 5 opcional: Verificar el status 
 Paso 6: Mostrar el contenido

 */



// Ejemplo 1

var conten = document.getElementById("conten")
conten.innerText = "cargando..."
setTimeout(() => {
    // ajax. Se ponen los pasos
    var ajax = new XMLHttpRequest() // Paso 1
    //metodos: get leer, post enviar, delete borrar, put actualizar
    ajax.open("get", "archivo.txt") // Paso 2
    ajax.onload = cargarDatos // Paso 3 y define una Function para luego crearla
    ajax.send()  // Paso 4

    function cargarDatos() {
        if (ajax.status == 200) { // Paso 5
            console.log(ajax.responseText) // Paso 6 te muestra el archivo txt. en consola
            conten.innerText = ajax.responseText // te lo muestra en el <p>

        } else {
            conten.innerText = "Contenido no disponible ):"
        }
    }


}, 4000)


// Ejemplo 2 JSON

var json = new XMLHttpRequest() // 1
json.open("get", "archivo.json") // 2
json.onload = () => { // 3
    if (json.status == 200) { // 5
        console.log("antes: ")
        console.log(json.responseText) // Te muestra el archivo json en consola

        var productos = JSON.parse(json.responseText) // Te lo muestra en Arreglo
        console.log("ahora: ")
        console.log(productos)

        for (var i = 0; i < productos.length; i++) {
            var lista = document.createElement("ul")
            var item = "<li>Nombre: " + productos[i].nombre + "</li><li> Apellido: " + productos[i].apellido +"</li><li>Edad: " + productos[i].edad + "</li><li> Salario: " + productos[i].salario + "</li>"
            lista.innerHTML = item
            document.body.appendChild(lista) 

        }
    }
}
json.send()


 // Ejemplo 3   
 
 let boton = document.querySelector("button")
 boton = addEventListener ("click", ()=>{
     let xhr = new XMLHttpRequest()
     xhr.open("get","plantilla.html")
     xhr.addEventListener("load", ()=>{
         if (xhr.status == 200) {
            let plantilla = xhr.responseText
            console.log(plantilla)
            let div = document.createElement("div")
            div.innerHTML = plantilla
            document.body.appendChild(div)
         } else {
             console.log("contenido no disponible")
         }
     })
     xhr.send()

 })