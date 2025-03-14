

// const noteContainer = document.querySelector('.noteContainer')
// const btn = document.getElementById('btn')
// const notes = document.querySelectorAll('.input-box')


// function showNotes(){
//     // noteContainer.innerHTML = localStorage.getItem('notes')
//     noteContainer.innerHTML = localStorage.getItem('notes') || ""; // Agar localStorage empty ho to empty string use karein
//     setEventListeners(); // Load hone ke baad event listeners set karna zaroori hai
// }
// showNotes()

// function updateStorage(){
//     localStorage.setItem('notes',noteContainer.innerHTML)
// }

// btn.addEventListener('click',()=>{

//     let inputBox = document.createElement('p')
//     let img = document.createElement('img')
//     inputBox.className = 'input-box'
//     inputBox.setAttribute('contenteditable','true')
//     img.src = 'images/delete.png'
//     noteContainer.appendChild(inputBox).appendChild(img)
    
// })
// function setEventListeners() {
//     let notes = document.querySelectorAll('.input-box');

//     notes.forEach(note => {
//         note.addEventListener('keyup', () => {
//             updateStorage();
//         });
//     });
// }

// noteContainer.addEventListener('click',function(e){
//     if (e.target.tagName === 'IMG') {
//         e.target.parentElement.remove()
//         updateStorage()
//     }
//     // else if(e.target.tagName === 'P'){
//     //     notes = document.querySelectorAll('.input-box')
//     //     notes.forEach(nt => {
//     //         nt.onKeyUp = function(){
//     //             updateStorage()
//     //         }
//     //     })
//     // }
// })

// document.addEventListener('keydown',event=>{
//     if(event.key === 'Enter'){
//         document.execCommand('insertLineBreak')
//         event.preventDefault()
//     }
// })

const noteContainer = document.querySelector('.noteContainer')
const btn = document.getElementById('btn')

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes') || ""; // Agar localStorage empty ho to empty string use karein
    setEventListeners(); // Load hone ke baad event listeners set karna zaroori hai
}
showNotes();

function updateStorage() {
    localStorage.setItem('notes', noteContainer.innerHTML);
}

btn.addEventListener('click', () => {

    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox);
    
    setEventListeners(); // Naye notes ke liye event listeners set karna zaroori hai
    updateStorage(); // Naye note ko storage mai bhi save kar do
});

function setEventListeners() {
    let notes = document.querySelectorAll('.input-box');

    notes.forEach(note => {
        note.addEventListener('keyup', () => {
            updateStorage();
        });
    });
}

noteContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});
