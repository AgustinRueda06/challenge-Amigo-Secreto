let nombresAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre) {
        nombresAmigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre');
    }
}
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < nombresAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = nombresAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSorteado = nombresAmigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}


