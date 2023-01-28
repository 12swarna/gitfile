
//adding delte button and also use forms to get the items//
let forms = document.getElementById('newform');
let item = document.getElementById('items');
let filter = document.getElementById('filter');
//adding //
forms.addEventListener('submit', newFun);
//delteing button function//
item.addEventListener('click', removeItem);
//filter button keyterms//
filter.addEventListener('keyup', filterItems);

function newFun(e) {
  e.preventDefault();

  let newItems = document.getElementById('myForm').value;
  let newForm=document.getElementById('description').value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  console.log(li);
  li.appendChild(document.createTextNode(newItems));
  let descriptionnode=document.createTextNode(newForm);
  li.appendChild(descriptionnode);
  //creating delte button//
  let delteBtn = document.createElement('button');
  delteBtn.className = "btn btn-danger btn-sm float-right delete";
  delteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(delteBtn);
  //creating edit button//
  let editBtn = document.createElement('button');
  editBtn.className = "  btn-info btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode('EditButton'));
  li.appendChild(editBtn);
  item.appendChild(li);

}
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}
function filterItems(e) {
  let text = e.target.value.toLowerCase();
   let itemList=item.getElementsByTagName('li');
   Array.from(itemList).forEach(function(items){
    let itemName=items.firstChild.textContent;
    let descriptionnode=items.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1|| descriptionnode.toLowerCase().indexOf(text) !=-1){
      items.style.display="block";
    }
    else{
      items.style.display='none';
    }
    

   });
   
}








