const bPlayPause = document.getElementById('play-pause')
const bAudioCapitulo = document.getElementById('audio-capitulo')
const bAnterior = document.getElementById('anterior')
const bAvanca = document.getElementById('proximo')
const nCap = document.getElementById('capitulo')

const numeroCap = 10;
let taTocando = 0;
let capAtual = 1

function trocarNomeFaixa(){
    nCap.innerText = 'Capitulo ' + capAtual
}

function tocarFaixa(){
    bAudioCapitulo.play();
    if(taTocando===0) {
        bPlayPause.classList.remove('bi-play-circle-fill')
        bPlayPause.classList.add('bi-pause-circle-fill')
}
 
}
    

function pausarFaixa(){
    bAudioCapitulo.pause();
    if(taTocando ===1){
        bPlayPause.classList.remove('bi-pause-circle-fill')
        bPlayPause.classList.add('bi-play-circle-fill')
        
}
}

function PlayOrPause(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }
    
    else{
        pausarFaixa();
        taTocando = 0;
    }
}


function voltarFaixa(){
    if (capAtual === 1){
        capAtual = 1
    }
    else{
        capAtual = capAtual-1
    }
    bAudioCapitulo.src = './books/dom-casmurro/' + capAtual + '.mp3';
    tocarFaixa();
    taTocando=1;
    trocarNomeFaixa();
}

function proximaFaixa(){
    if (capAtual === numeroCap){
        capAtual = 1
    }
    else{
        capAtual = capAtual+1
    }
    bAudioCapitulo.src = './books/dom-casmurro/' + capAtual + '.mp3';
    tocarFaixa();
    taTocando=1;
    trocarNomeFaixa();
}

bPlayPause.addEventListener('click', PlayOrPause);
bAvanca.addEventListener('click', proximaFaixa)
bAnterior.addEventListener('click', voltarFaixa)