
window.addEventListener("load", () => {
/* Elenentu parinimkimas pagal ID
//console.log(document.getElementById('box'));

console.log(document.querySelector('#box'));
*/

/* Elemento parininkimas pagal klase
console.log(document.getElementsByClassName('box-div'));
console.log(document.querySelectorAll('.box-div)); */


// console.log(document.querySelector('#box'));
// console.log(document.querySelector('.box-div'));

let container = document.querySelector(".container");
//console.log(container);
// console.log(document.querySelectorAll('span-div'));
// console.log(container.querySelectorAll('span-div'));


let box = container.querySelector('#box');
console.log(box.nextElementSibling); // sekantis elementas
console.log(box.previousElementSibling); // ansktesnis elementas
// tevinuo elemento pasirinkimas
box.parentElement;

container.querySelector('.span-div');
document.querySelector('.container .span-div').innerHTML = '<b>Naujas naujausias</>';
document.querySelector('.container .span-div').innerText = '<b>Naujas naujausias</>';
document.querySelector('.container .span-div').textContent = '<b>Naujas naujausias</>';


document.querySelector('.btn').textContent;

container.style.display = "block";
container.style.backgroundColor = "#c3c3c3";
document.querySelectorAll('.span-div').forEach(span => {
    span.style.fontWeight = "800";
});

document.querySelectorAll('.box-div').forEach(div => {
    div.style.color = "#000FF";
});
document.querySelector('.span-class').style.cssText = "background-color: #666666";



let button = document.querySelector('button');
button.addEventListener("click", (e) => {
    button.textContent = "As paspaustas";
    button.classList.remove('btn', 'btn-primary');
    button.classList.add('btn', 'btn-secondary');
    //arba
    // button.classList.replace('btn-primary', 'btn-secondary');
    // dar galima perjunginet sulig kiekvienu paspaudimu
    // button.classList.toggle('btn-primary');
   //  button.classList.toggle('btn-secondary');
});

let menu_items = document.querySelectorAll('nav-item');
menu_items.forEach(item => {
    item.querySelector('.nav-link').addEventListener("click", (e) => {
        removeClassFromItemList(menu_items, 'active');
        item.classList.remove('active');
    });
});

function removeClassFromItemList(item, class_name) {
    menu_items.forEach(item => {
        if (item.classList.contains(class_name))
            item.classList.remove(class_name);
    });
}

let naujas_elementas = document.createElement('p');
naujas_elementas.innerHTML = "Lorem Ipsum, <b>paryskintas</b>";
naujas_elementas.style.cssText = "color: green; font-size: 20px";
container.appendChild(naujas_elementas);

});