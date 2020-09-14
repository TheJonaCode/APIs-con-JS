// BOTÓN NOTIFICAR!!

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then(resultado =>{
            console.log('El resultado es ', resultado);
        })
});

//BOTÓN VER NOTIFICACIÓN

const verNotificaicon = document.querySelector('#verNotificacion');

verNotificaicon.addEventListener('click', () =>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación',{
            icon: 'img/ccj.png', // <--- PONER TU LOGO
            body: 'Código de Jonathan'
        })

        notificacion.onclick = function(){
            window.open('https://www.google.com.mx/search?hl=es-419&tbm=isch&sxsrf=ALeKk03wwaqSVdFbhHArfwgDBld00E2vkg%3A1600113233584&source=hp&biw=1366&bih=625&ei=UcpfX8eDIYXV9AP-grK4Dg&q=sopas+campbell&oq=sopas+cam&gs_lcp=CgNpbWcQAxgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECCMQJzoFCAAQsQM6CAgAELEDEIMBUKo0WJZCYINMaAFwAHgAgAGzAYgBuAuSAQMwLjmYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCg&sclient=img')
        }
    }
});