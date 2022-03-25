function curtain() {
    var x = document.getElementById('curtain');
    if (x.style.animationName === "none" || x.style.animationName === "curtainshow") {
        x.style.animationName = "curtainhide";
    } 
    else if(x.style.animationName = "curtainhide"){
        x.style.animationName = "curtainshow";
    }
}



