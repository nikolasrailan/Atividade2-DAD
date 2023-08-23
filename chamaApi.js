function testeApi() {
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {

        console.log(response);
        const piada = response.data;

        mostraPiada(piada);
    })
}

const btnChama = document.getElementById('btnChama');

btnChama.addEventListener('click', () => {

    testeApi();
    console.log('Fui clicado');
})

function mostraPiada(piada) {
    const titulo = document.getElementById('tituloPiada');

    if(titulo){
        titulo.innerHTML = piada.setup;
        console.log(titulo);
    }



}