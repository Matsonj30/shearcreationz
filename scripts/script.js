function burgerMenu(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var overflow = document.getElementById("overFlowMenu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        overflow.style.zIndex = "5";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(200px)";
        overflow.style.zIndex = "1";
        burgerMenu[0].style.position = "absolute";
    }
}