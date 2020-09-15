window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si estás conectado uwu');
    } else {
        console.log('No estás conectado... :(');
    }
} 