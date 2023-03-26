function burgerMenu(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(200px)";
        burgerMenu[0].style.position = "absolute";
    }
}

function moveTestimonial(direction){
    var currentTestimonialIndex = null;
    for(i = 1; i <= 3; i+=1){
        console.log("testimonial"+[i])
        var currentTestimonial = document.getElementById("testimonial"+[i])
        if(currentTestimonial.style.display != 'none'){
            currentTestimonial.style.transform = 'translate(100vw)';
            currentTestimonialIndex = i;
            break
        }
    }

    if(direction == 'left'){
        
    }
    else{

    }

}