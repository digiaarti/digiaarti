var moon = document.getElementById("moon");
moon.onclick = function(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        moon.src = "./resources/sun.png";
    }else{
        moon.src = "./resources/moon.png";
    }
}