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
        var currentTestimonial = document.getElementById("testimonial"+[i])

        if(getComputedStyle(currentTestimonial).transform == 'none'){
            currentTestimonialIndex = i;
            
        }

    }

    console.log(currentTestimonialIndex)
    if(direction == 'left'){ //get index - 1 and move left 
        //Old Testimonial
        document.getElementById("testimonial"+[currentTestimonialIndex]).style.transform = 'translateX(-100vw)';
        currentTestimonialIndex -= 1;
        //New testimonial
        document.getElementById("testimonial"+[currentTestimonialIndex]).style.transform = 'none';
      
    }
    else{ //get index + 1 and move right
        document.getElementById("testimonial"+[currentTestimonialIndex]).style.transform = 'translateX(100vw)';
        currentTestimonialIndex += 1;
        document.getElementById("testimonial"+[currentTestimonialIndex]).style.transform = 'none';

    }

}