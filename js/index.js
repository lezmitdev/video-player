const $video=document.querySelector('#video');
const $play=document.querySelector('#play');
const $pause=document.querySelector('#pause');
const $forward= document.querySelector('#forward');
const $backward=document.querySelector('#backward')
$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);

function handlePlay(){
    $video.play()
    $play.hidden=true
    $pause.hidden=false
    console.log('le diste click al boton de play')
}
function handlePause(){
    $video.pause()
    $pause.hidden=true
    $play.hidden=false
    
    console.log('le diste click al boton de pause')
}

$backward.addEventListener('click',handleBackward);

function handleBackward(){
    $video.currentTime-=10
    console.log("Para atrás 10 segundos")
}

$forward.addEventListener('click',handleForward);

function handleForward(){
    $video.currentTime+=10
    console.log("Para adelante 10 segundos")
}

const $progress=document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoaded);
$video.addEventListener('timeupdate',handleTimeupdate);

function handleLoaded(){
    $progress.max= $video.duration
    console.log('Ha cargaod mi video', $video.duration);
}
function handleTimeupdate(){
    $progress.value=$video.currentTime
    console.log('tiempo actual',$video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime=$progress.value
}
