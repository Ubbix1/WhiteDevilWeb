function navSlide(){
    var navItems =document.getElementById("nav-items")
    navItems.classList.toggle("nav-items--active")
 }
 function navClose(){
    var navActive = document.getElementsByClassName("nav-items--active")
    if(navActive[0]){
        navActive[0].classList.toggle("nav-items--active")
    }
 }

 function closeFunction(){
    document.getElementById('demo').onclick=
    document.getElementById("disclaimer").style.display = "none"
 }
