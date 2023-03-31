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

function defineCurrentPage(){
    var tab = window.location.href;
    var links = document.getElementById("menu").querySelectorAll("a")

    console.log(tab)
    switch(tab){
        case "http://127.0.0.1:5500/index.html":
            links[0].style.borderBottom = "3px solid #C2272D";
            break
        case "http://127.0.0.1:5500/ourTeam.html":
            links[1].style.borderBottom = "3px solid #C2272D";
            break
        case "https://hairimagecamrose.ca/contact":
            links[2].style.borderBottom = "3px solid #C2272D";
            break
        case "http://127.0.0.1:5500/contact.html":
            links[3].style.borderBottom = "3px solid #C2272D";
            break
    }//switch  
}

defineCurrentPage()


function moveTestimonial(direction){
    var currentTestimonialIndex = null;
    for(i = 1; i <= 3; i+=1){
        var currentTestimonial = document.getElementById("testimonial"+[i])

        if(getComputedStyle(currentTestimonial).transform == 'none'){
            currentTestimonialIndex = i;
            moveDiv(currentTestimonialIndex, direction)
        }

    }
}


function moveDiv(currentTestimonialIndex, direction){

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
    changeDot(currentTestimonialIndex)
}

function changeDot(currentTestimonialIndex){
    var leftArrow = document.getElementById("leftArrow")
    var rightArrow = document.getElementById("rightArrow")

    if(currentTestimonialIndex == 1){ //will be furthest to the left
        leftArrow.style.cssText = 'opacity: 0; pointer-Events: none;';
    }
    else if(currentTestimonialIndex == 3){ //will be furthest to the left
        rightArrow.style.cssText = 'opacity: 0; pointer-Events: none;';
    }
    else{
        leftArrow.style.cssText = 'opacity: 1; pointer-Events: all;';
        rightArrow.style.cssText = 'opacity: 1 ;pointer-Events: all;';
      
    }
    
    for(i = 1; i <= 3; i+=1){
        if(i == currentTestimonialIndex){
            document.getElementById("circle"+[i]).style.backgroundColor = "#e6242b"
        }
        else{
            document.getElementById("circle"+[i]).style.backgroundColor = "#C2272D"
        }
    }
}
  