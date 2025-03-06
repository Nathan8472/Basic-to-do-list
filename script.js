const nameInput = document.getElementById("Item");
const button = document.getElementById("AddItem");
const button2 = document.getElementById("ClearTasks");
const list = document.getElementById("list");

let task = []


button.addEventListener("click", ()=> {
    console.log(task);
    task.push(nameInput.value);
    let li = document.createElement("li");
    let t = document.createTextNode(nameInput.value);
    let x = document.createElement("Button");
    document.querySelectorAll("List").forEach(eLI=>eLI.appendChild( newBt.cloneNode(true)) )
    x.textContent = "X";
        li.appendChild(t);
    li.appendChild(x);
    list.appendChild(li);
    nameInput.value = "";
    x.onclick=e=>{
        list.removeChild(li);    
        }
    })

button2.addEventListener("click", ()=> {
    console.log(task);
    while (list.hasChildNodes())
        list.removeChild(list.firstChild);
      })

      