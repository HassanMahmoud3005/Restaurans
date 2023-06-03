let nav = document.getElementById("navbar")


window.onscroll = function(){
    if(window.scrollY > 0)
    {
        nav.style.backgroundColor = "#222535"
    }else{
        nav.style.backgroundColor = "transparent" 
    }
}