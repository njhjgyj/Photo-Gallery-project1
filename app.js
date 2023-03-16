let getDiv4Id = document.getElementById("div4");

let xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {

    const converIntoObject1 = JSON.parse(this.responseText);
    
    let text = "";

    setTimeout(() => {
        
        for (let x in converIntoObject1) {
    
            text += "<img src='" + converIntoObject1[x].src + "' ";
            text += "alt='" + converIntoObject1[x].alt + "' class='imgClass' ";
            text += "id='" + converIntoObject1[x].id + "' onclick='foo1(this)' />";
    
        }

        getDiv4Id.innerHTML = text;
    }, 1000);



}

xmlhttp.open("GET", "./object.txt", true);
xmlhttp.send();

let getImgTags = document.getElementsByClassName("imgClass");

function foo1(e) {

    e.style.width = "1000px";
    e.style.height = "1000px";
    e.style.opacity = "1";

}

let getBodyTag = document.getElementById("body-tag1");
getBodyTag.addEventListener("click", () => {

    for (let i = 0; i < getImgTags.length; i++) {
        
        getImgTags[i].style.width = "350px";
        getImgTags[i].style.height = "350px";
        getImgTags[i].style.opacity = "0.5";

        
    }

}, true)