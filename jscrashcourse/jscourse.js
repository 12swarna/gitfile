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

// });s
 //let newForm = document.querySelector("#thisform");//
// let names = document.querySelector('#name');
// let emails = document.querySelector('#email');
 newForm.addEventListener("submit", savedToLocal);

function savedToLocal(event) {
    event.preventDefault();

    //console.log(names.value, emails.value);//
    // localStorage.setItem(namesSwa.value,emails.value);//
    //adding object in localstorage//
    let names = event.target.swarna.value;
    let emails = event.target.swarnaemail.value;
    const userDetails = {
        names: names,
        emails: emails

    }
    localStorage.setItem(userDetails.emails, JSON.stringify(userDetails));
    //console.log(localStorage);//


    //showUserOnScreen(userDetails);//
    showUserOnScreen(userDetails);



}

function showUserOnScreen(userDetails) {

    let parentE = document.getElementById("users");
    parentE.innerHTML = parentE.innerHTML + `<li>${userDetails.names} -${userDetails.emails}</li>`



}












