const openEditBtn = document.querySelector('.profile__editBtn_popup');
const editPopup = document.querySelector('.popup');
const closeEditBtn = document.querySelector('.popup__close');
const saveBtn = document.querySelector('.popup__saveBtn');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup_input-username');
let jobInput = document.querySelector('.popup_input-userjob');

let username = document.querySelector('.profile__name');
let userjob = document.querySelector('.profile__job');

if (username.innerHTML !== "") {
    nameInput.value = username.innerHTML;
}

if (userjob.innerHTML !== "") {
    jobInput.value = userjob.innerHTML;
}

openEditBtn.addEventListener('click', function() {
    editPopup.classList.add('popup_opened');
});

closeEditBtn.addEventListener('click', function() {
    editPopup.classList.remove('popup_opened');
});

saveBtn.addEventListener('click', function() {
    editPopup.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;    
    username.textContent = nameInput.value;
    userjob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);