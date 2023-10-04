/* personal project JS, placeholder */


var themeint = sessionStorage.getItem("themeint")
var root = document.querySelector(':root');
if(themeint == null){
    var themeint = Math.floor(Math.random()*1);
    sessionStorage.setItem("themeint", themeint);
}
var colors = {
    0:{
        "main-color": "#ee8de6",
        "highlight-color": "#5bebf5"
    }
}

var theme = colors[themeint];
root.style.setProperty('--main-color', theme["main-color"]);
root.style.setProperty('--highlight-color', theme["highlight-color"]);

