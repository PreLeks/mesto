const openEditBtn = document.querySelector('.profile__editBtn_popup');
const editPopup = document.querySelector('.popup');
const closeEditBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_username');
let jobInput = document.querySelector('.popup__input_userjob');
let username = document.querySelector('.profile__name');
let userjob = document.querySelector('.profile__job');

function openEditPopup() {
    nameInput.value = username.textContent;
    jobInput.value = userjob.textContent;
    if (editPopup.classList.contains('popup_opened')) {
        editPopup.classList.remove('popup_opened');
    } else {
        editPopup.classList.add('popup_opened');
    }
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userjob.textContent = jobInput.value;
    openEditPopup();
}

openEditBtn.addEventListener('click', openEditPopup);
closeEditBtn.addEventListener('click', openEditPopup);
formElement.addEventListener('submit', formSubmitHandler);