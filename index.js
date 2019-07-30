let skinIndex = 1;

let changeSkins = n => {
    showSkins(skinIndex += n);
}

let showSkins = n => {
    let x;
    let skins = document.getElementsByClassName("skinSlider");
    
    if(n < 1) {skinIndex = 2;}
    if(n > 2) {skinIndex = 1;}
    if(n == 3) {n = 1;}
    if(n == 0) {n = 2;}

    for(x = 0; x < skins.length; x++){
        skins[x].setAttribute("id", x);
    
        if(n == 1){
            if(skins[x].id >= 0 && skins[x].id <= 3){
                skins[x].style.display = "block";
            } else{
                skins[x].style.display = "none";
            }
        }
    
        if(n == 2){
            if(skins[x].id >= 4 && skins[x].id <= 7){
                skins[x].style.display = "block";
            } else{
                skins[x].style.display = "none";
            }
        }
    }
    skins[skinIndex-1].style.disply = "block";
}

showSkins(skinIndex);