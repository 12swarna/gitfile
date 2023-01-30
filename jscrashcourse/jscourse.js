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
//newForm.addEventListener("submit", savedToLocal);//

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
    let parentE=document.getElementById("users");

    let childEle=document.createElement("li");
    childEle.textContent=userDetails.names+" - "+userDetails.emails+" ";
    

    
    let butto=document.createElement("input");
butto.type="button"
butto.value="delete";
console.log(butto);
parentE.appendChild(butto);
butto.onclick=() =>{
    localStorage.removeItem(userDetails.emails)
    parentE.removeChild(childEle);

}

//adding edit button//
  
let editButton=document.createElement("input");
editButton.type="button"
editButton.value="Edit";
console.log(editButton);
parentE.appendChild(editButton);
editButton.onclick=() =>{
    localStorage.removeItem(userDetails.emails)
    parentE.removeChild(childEle);
    document.getElementById("name").value=userDetails.names
    document.getElementById("email").value=userDetails.emails

}
childEle.appendChild(butto);
childEle.appendChild(editButton);
parentE.appendChild(childEle);

    


}
















