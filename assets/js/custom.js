var ic1 = document.getElementById("menu-ic-open");
var ic2 = document.getElementById("wrp-body-menu");
ic2.style.display="none";
var ic3 = document.getElementById("wrp-item-menu");
ic3.style.display="none";
ic1.addEventListener("click",open);
ic2.addEventListener("click",close);
function open(){
    
    
    
        ic2.style.animation="open ease 0.5s";
        ic2.style.display="block";
        ic2.style.opacity="0.5";
        ic3.style.animation="open2 ease 0.5s";
        ic3.style.display="block";
        

}
function close(){
    ic2.style.display="none";
    ic3.style.display="none";
}