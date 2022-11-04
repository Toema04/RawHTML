let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let saif = document.querySelector('.saif');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.bottom = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    saif.style.fontSize = value + 'px';
    if(scrollY >= 63){
        saif.style.fontSize = 63 + 'px';
        // saif.style.position = 'fixed';
        // if(scrollY >= 113){
        //     saif.style.display = 'none';
        // }else{
        //     saif.style.display = 'block';
        // }
        if(scrollY >= 100){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
    }
}