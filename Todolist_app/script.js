
const inputBox = document.getElementById("search-box")
const listContainer = document.getElementById("list-container")

function addtask(){
    if(inputBox.value === ''){
        alert("You must enter something!")
    }
    else{
        let li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        console.log(li);
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()