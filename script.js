const addButton = document.querySelector('.form__button')
const formInput = document.querySelector('.form__input')
const list = document.querySelector('.list')


addButton.addEventListener('click', ()=>{
    let dataDisplay = formInput.value
    let li = document.createElement('li');
    li.classList.add('list__li')
    if(dataDisplay){
        li.innerHTML = `${dataDisplay} <button class="delete-button">Delete</button>`;
    }else{
        let empFild = 'The field is empty'
        li.innerHTML = `${empFild} <button class="delete-button">Delete</button>`;
    }
    list.prepend(li);
    ClearFields()
})

function ClearFields() {
    document.querySelector('.form__input').value = "";
}

list.addEventListener('click',(event)=>{
    let item = event.target
    if(item.tagName === 'LI'){
        item.style.backgroundColor = 'green'
    } else if(item.classList.contains('delete-button')){
        item.closest('li').remove()
    }
})

function deleteList(el){
    el.closest('li').remove();
}

