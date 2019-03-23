let media = Array.from(document.querySelectorAll('.media'));//Se crea vector con cada uno de los contenedores de los videos
let songs = [];//vector contenedor de canciones
let videos = [];//vector contenedor de videos
let k = 0;
for(let i = 0; i < media.length; i++){//ciclo para separar las canciones y los videos
    if(i <= 2){
        songs[i]=media[i];
    }else{
        videos[k]=media[i];
        k++;
    }
}


document.querySelector('#boton-songs').addEventListener('click', e =>{//metodo que se activa cuando se preciona el boton next video en el tab de top Songs
    let pos =0;
    for(let i = 0 ; i < songs.length; i++){//este ciclo es para capturar la posicion del elemento activo
        if(songs[i].classList.contains('active')){
            pos = i;
        }
    }
    songs.map(song => song.classList.remove('active'));//removemos la clase active del elemento activo
    if(pos == 2){//si es la ultima cancion reseteamos el contador para que nos lleve al principio
        pos = 0;
        songs[pos].classList.add('active');// añadimos la clase active al elemento siguiente
    }else{// si no es la última cancion, simplemente avanzamos el contador una posicion
        pos++;
        songs[pos].classList.add('active');// añadimos la clase active al elemento siguiente
    }
    
})

document.querySelector('#boton-watch').addEventListener('click', e =>{//metodo que se activa cuando se preciona el boton next video en el tab de should watch
    let pos1 =0;
    for(let j = 0 ; j < videos.length; j++){//este ciclo es para capturar la posicion del elemento activo
        if(videos[j].classList.contains('active')){
            pos1 = j;
        }
    }
    videos.map(video => video.classList.remove('active'));;//removemos la clase active del elemento activo
    if(pos1 == 2){//si es la ultima cancion reseteamos el contador para que nos lleve al principio
        pos1 = 0;
        videos[pos1].classList.add('active');// añadimos la clase active al elemento siguiente
    }else{
        pos1++;
        videos[pos1].classList.add('active');// añadimos la clase active al elemento siguiente
    }
    
})