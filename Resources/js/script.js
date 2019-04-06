function hideshow(){
    var x = document.getElementById("form1");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
   
};


function hideflash(){
    var x = document.getElementById("flashed");
    if (x.style.display === "block"){
        x.style.display = "none";
    }
};