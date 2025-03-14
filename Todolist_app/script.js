

const inputBox = document.getElementById('search-box')
const listContainer = document.getElementById('list-container')
const btn = document.getElementById('btn')

function addTask(){
    if(inputBox.value === ''){
        alert('Please add some task!')
    }
    else {
        let li = document.createElement('li')
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.innerHTML = inputBox.value
        li.appendChild(span)
        listContainer.appendChild(li)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

btn.addEventListener('click',addTask)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('data') 
}
showData()