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
let items1=document.getElementsByClassName('freedom');

for(let i=0;i<items1.length;i++){
    items1[i].style.fontWeight="bold";
    items1[i].style.backgroundColor="Orange";

}
let tag=document.getElementsByTagName('li');
for(let i=0;i<tag.length;i++){
    tag[i].style.fontWeight="bold";
    tag[i].style.fontSize="30px"
}
console.log(tag);
let second=document.querySelectorAll('.list-group-item');
second[1].style.backgroundColor="green";
let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}
let newdiv=document.createElement("div");
console.log(newdiv);
newdiv.id="newid";
newdiv.className="divclass";
newdiv.setAttribute('title','swarna');
let text=document.createTextNode("hello world");
newdiv.append(text);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1')
container.insertBefore(newdiv,h1);

let list=document.createElement("li");
console.log(list);
list.className="list-group-item";
let newtext=document.createTextNode("hello world");
list.appendChild(newtext);
let a=document.getElementById('items');

a.innerHTML="<li>hello world</li> " + a.innerHTML;
console.log(a);




