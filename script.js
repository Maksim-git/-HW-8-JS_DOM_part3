const addButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');
const list = document.querySelector('.list');

addButton.addEventListener('click', ()=>{
  let fieldValue = formInput.value;
  const createList = document.createElement('li');
  createList.classList.add('list__li');
  if (fieldValue) {
    createList.innerHTML = `${fieldValue} <button class="delete-button">Delete</button>`;
    } else {
    const addingEmptyValue = 'The field is empty';
    createList.innerHTML = `${addingEmptyValue} <button class="delete-button">Delete</button>`;
    }
    list.prepend(createList);
    ClearFields()
})

function ClearFields() {
    document.querySelector('.form__input').value = "";
}

list.addEventListener('click',(event)=>{
  const item = event.target;
   if (item.classList.contains('delete-button')){
    item.closest('li').remove();
    }
     else if (item.tagName === 'LI'){
      item.classList.toggle('active');
    }
})


