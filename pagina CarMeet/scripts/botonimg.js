let miImage = document.querySelector('img'); miImage.onclick = function () 

{ 
    let miSrc = miImage.getAttribute('src'); 


    if (miSrc === 'images/firefox-icon.png') {

        miImage.setAttribute('src','pagina CarMeet/fotos/auto1.jpg'); 

    } 
    else 
    
    { miImage.setAttribute('src', 'pagina CarMeet/fotos/auto2.jpg'); } 
}