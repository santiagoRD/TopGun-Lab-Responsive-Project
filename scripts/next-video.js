let media = Array.from(document.querySelectorAll('.media'));
let songs = [];
let videos = [];
let k = 0;
for(let i = 0; i < media.length; i++){
    
    if(i <= 2){
        songs[i]=media[i];
    }else{
        videos[k]=media[i];
        k++;
    }
}


document.querySelector('#boton-songs').addEventListener('click', e =>{
    // songs[0].classList.remove('active');
    // songs[1].classList.add('active');
    let pos =0;
    for(let i = 0 ; i < songs.length; i++){
        if(songs[i].classList.contains('active')){
            pos = i;
        }
    }
    songs.map(song => song.classList.remove('active'));
    if(pos == 2){
        pos = 0;
        songs[pos].classList.add('active');
    }else{
        pos++;
        songs[pos].classList.add('active');
    }
    
})

document.querySelector('#boton-watch').addEventListener('click', e =>{
    // songs[0].classList.remove('active');
    // songs[1].classList.add('active');
    let pos1 =0;
    for(let j = 0 ; j < videos.length; j++){
        if(videos[j].classList.contains('active')){
            pos1 = j;
        }
    }
    videos.map(video => video.classList.remove('active'));
    if(pos1 == 2){
        pos1 = 0;
        videos[pos1].classList.add('active');
    }else{
        pos1++;
        videos[pos1].classList.add('active');
    }
    
})