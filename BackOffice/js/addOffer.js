//Etude de cas
document.addEventListener("DOMContentLoaded",function(){

    var titleElement=document.getElementById("title");
    var destinationElement=document.getElementById("destination");

    titleElement.addEventListener("keyup",function(){
        var title=titleElement.value;
        var title_error=document.getElementById("title_error");
        if(title.length<3){
            title_error.innerHTML="Le titre doit contenir au moins 3 caractères";
            title_error.style.color="red";
        }
        else{
            title_error.innerHTML="Correct";
            title_error.style.color="green";
        }
    })
    destinationElement.addEventListener("keyup",function(){
    var destination=destinationElement.value;
    var destination_error=document.getElementById("destination_error");
    var pattern=/^[A-Za-z\s]{3,}$/;

    if (pattern.test(destination)==false){
        destination_error.innerHTML="La destination ne doit pas avoir des caractères spéciaux et doit contenir au moins 3 caractères";
        destination_error.style.color="red";
    }
    else{
        destination_error.innerHTML="Correct";
        destination_error.style.color="green";
    }
    })
})





