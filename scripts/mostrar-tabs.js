(function(d){
    let links = Array.from(d.querySelectorAll('.menu-principal__links'));//Traemos todos los links
    let articles = Array.from(d.querySelectorAll('.section-about__articles'));//Traemos todos los paneles
    d.querySelector('#menu-links').addEventListener('click', e => {//funcion que se activa cuando se hace click sobre el elemento padre de los links
        if(e.target.classList.contains('menu-principal__links')){//Pregunta si se esta haciendo click sobre un link
            let i = links.indexOf(e.target);//Guardamos la posicion del elemento seleccionado con el click
            links.map(link => link.classList.remove('active'));//Removemos de todos los elementos(links) la propiedad active
            links[i].classList.add('active');//agregamos la propiedad active al elemento seleccionado
            articles.map(panel => panel.classList.remove('active'));//Removemos de todos los elementos(paneles) la propiedad active
            articles[i].classList.add('active');//agregamos la propiedad active al panel correspondiente del link seleccionado
        }
    })
})(document);