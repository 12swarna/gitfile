// //single element//
// let f=document.getElementById("thisform");
// console.log(f);
// f.style.background="grey";
// f.style.color="red";
// let tag=document.getElementsByTagName("h1");
// tag[0].backgroundColor="yellow";
// tag.textContent="heelo";
// console.log(tag);
// let h=document.getElementById("myheading");
// //h.style.backgroundColor="blue";//
// //h.innerHTML="<h1>hello world</h1>";//
// console.log(h);

// let but=document.querySelector("#btn");
// but.addEventListener("click",(e)=> {
//     e.preventDefault();
//     console.log("5");

// });
let newForm = document.querySelector("#thisform");
let nameInput = document.querySelector('#name');
let email = document.querySelector('#email');
let users = document.querySelector('#users');
let message = document.querySelector('.msg')
console.log(email);
newForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value, email.value);
    localStorage.setItem(nameInput.value,email.value);
    console.log(` ${nameInput.value} ${localStorage.getItem(nameInput.value)}`)

}

