console.log(document.getElementById('header-title'));
let heading=document.getElementById('header-title');
heading.innerHTML="<h1>Hello</h1>";
heading.style.borderBottom="solid 3px Black";
console.log(heading);
console.log(document.all[14].textContent="ADD ITEMS");
console.log(document.all[14].innerHTML="<h1>ADD ITEMS</h1>");
console.log(document.all[14].style.color="green");
let items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
console.log(items);
