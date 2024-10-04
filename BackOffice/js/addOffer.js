// Partie 3 Etude de cas 

document.addEventListener("DOMContentLoaded",function(){

var titleElement=document.getElementById("title");
var destinationElement=document.getElementById("destination");

titleElement.addEventListener("keyup",function(){
    var titleValue=titleElement.value;
    var titleError=document.getElementById("title_error");

    if(titleValue.length<3){
        titleError.innerHTML="Le titre doit contenir au moins 3 caractères";
        titleError.style.color="red";
    }
    else {
        titleError.innerHTML="Correct";
        titleError.style.color="green";
    }

    destinationElement.addEventListener("keyup",function(){
        var destinationValue=destinationElement.value;
        var destinationError=document.getElementById("destination_error");
        var pattern= /^[A-Za-z\s]{3,}$/;

        if(!pattern.test(destinationValue)){
            destinationError.innerHTML="La destination doit contenir uniquement des lettre et des espaces";
            destinationError.style.color="red";
        }
        else {
            destinationError.innerHTML="Correct";
            destinationError.style.color="green";
        }
        })
    })

})