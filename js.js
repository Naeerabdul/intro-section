let sersh7 = document.getElementById("12");
let texte71 = document.getElementById("22");
let texte72 = document.getElementById("menu");
let texte73=document.getElementById("tow-down")

sersh7.onclick = function () {
    texte71.classList.add("none");
    sersh7.classList.add("blok");
    texte72.classList.add("bloook");
}
texte71.onclick = function () {
     texte71.classList.remove("none");
    sersh7.classList.remove("blok");
        texte72.classList.remove("bloook");

}
let sersh10 = document.getElementById("one10");
let texte10= document.getElementById("li10");
let texte110 = document.getElementById("one-up10");
let texte210=document.getElementById("one-don10")

sersh10.onclick = function () {
    texte10.classList.toggle("blok");
    texte110.classList.toggle("none");
    texte210.classList.toggle("blok");
}





let sersh = document.getElementById("one");
let texte = document.getElementById("li1");
let texte1 = document.getElementById("one-up");
let texte2=document.getElementById("one-don")

sersh.onclick = function () {
    texte.classList.toggle("none");
    texte1.classList.toggle("none");
    texte2.classList.toggle("blok");
}

let sersh1 = document.getElementById("tow");
let texte5 = document.getElementById("li2");
let texte11 = document.getElementById("tow-up");
let texte21=document.getElementById("tow-down")

sersh1.onclick = function () {
    texte5.classList.toggle("none");
    texte11.classList.toggle("none");
    texte21.classList.toggle("blok");
}



let sersh12 = document.getElementById("tow2");
let texte52 = document.getElementById("li22");
let texte112 = document.getElementById("tow-up2");
let texte212=document.getElementById("tow-down2")

sersh12.onclick = function () {
    texte52.classList.toggle("blok");
    texte112.classList.toggle("none");
    texte212.classList.toggle("blok");
}