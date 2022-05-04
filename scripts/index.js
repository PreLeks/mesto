const openEditBtn = document.querySelector('.profile__editBtn_popup');
const editPopup = document.querySelector('.popup');
const closeEditBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_username');
let jobInput = document.querySelector('.popup__input_userjob');
let username = document.querySelector('.profile__name');
let userjob = document.querySelector('.profile__job');

function toggleEditPopup() {
    editPopup.classList.toggle('popup_opened');
    if (editPopup.classList.contains('popup_opened')) {
        nameInput.value = username.textContent;
        jobInput.value = userjob.textContent;
    }
}
// Огромное спасибо!!! Очень круто!
function formSubmitHandler(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userjob.textContent = jobInput.value;
    toggleEditPopup();
}

openEditBtn.addEventListener('click', toggleEditPopup);
closeEditBtn.addEventListener('click', toggleEditPopup);
formElement.addEventListener('submit', formSubmitHandler);