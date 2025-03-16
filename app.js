// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []



function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if (nombre == "") {
        alert("El campo nombre no puede estar vacio")
    }else {
        amigos.push(nombre);   
        //console.log(amigos);
        actualizarLista();
        limpiarCaja();
    }    
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";   
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `<li style="color: green;">El amigo sorteado es: ${amigoSorteado}</li>`;

        amigos = [];
        lista.innerHTML = "";
    }
}