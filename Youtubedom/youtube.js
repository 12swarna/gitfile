console.log(document);
console.log(document.getElementById('header-title'));
let header=document.getElementById('header-title');
console.log(header);
//header.textContent="hello";//
//header.innerText="goodbye";//
header.innerHTML='<h2>Hello</h2>';
header.style.borderBottom ='solid 3px black';
 let other=document.getElementsByClassName('title');
 console.log(other);
 document.