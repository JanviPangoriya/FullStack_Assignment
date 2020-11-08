var inputtext = document.querySelector(".text");
var addbtn = document.querySelector(".addbtn");
var list = document.querySelector(".todolist");
addbtn.onclick = create;
list.onclick = chkdel;
function create(e){
    if(inputtext.value != ""){
    e.preventDefault();

    var newdiv = document.createElement("div");
    newdiv.classList.add("todo");

    var newli = document.createElement("li");
    newli.classList.add("todo-li");
    newli.innerHTML=inputtext.value;
    newdiv.appendChild(newli);

    var tickbtn = document.createElement("button");
    tickbtn.classList.add("tick-btn");
    tickbtn.innerHTML='<i class="fas fa-check"></i>';
    newdiv.appendChild(tickbtn);

    var delbtn = document.createElement("button");
    delbtn.classList.add("del-btn");
    delbtn.innerHTML='<i class="fas fa-trash"></i>';
    newdiv.appendChild(delbtn);

    list.appendChild(newdiv);
    inputtext.value = "";
    }
    else{
        alert("Hi! Input is Empty . Provide Some Text . Thank You....")
    }

}
function chkdel(e){
    var item = e.target;
    if(item.classList[0] === "del-btn"){
        var parent = item.parentNode;
        parent.remove();
    }
    if(item.classList[0] === "tick-btn"){
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}