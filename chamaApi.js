function testeApi() {
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {

        const piada = response.data;

        mostraPiada(piada);
    })
}

function testeApiGato() {
    axios.get('https://api.thecatapi.com/v1/images/search').then(response => {

        const gato = response.data;

        mostraReacao(gato);
    })
}


const btnChama = document.getElementById('btnChama');

btnChama.addEventListener('click', () => {

    testeApi();
    testeApiGato();
})

function mostraPiada(piada) {
    const titulo = document.getElementById('tituloPiada');
    const resposta=document.getElementById('respostaPiada');

    titulo.innerHTML = piada.setup;
    resposta.innerHTML = piada.delivery;
}

function mostraReacao(gato) {
    const img = document.getElementById('imgReacao');
    const i = Math.floor(Math.random() * numeros.length);

    console.log();
}