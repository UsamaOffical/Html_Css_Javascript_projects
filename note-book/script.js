
const noteContainer = document.querySelector('.noteContainer')
const btn = document.getElementById('btn')

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes') || ""; 
    setEventListeners();
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
    
    setEventListeners(); 
    updateStorage(); 
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
