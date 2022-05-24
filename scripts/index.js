const openBtnProfile = document.querySelector('.profile__editBtn_popup');
const openBtnCard = document.querySelector('.profile__addBtn_popup');
const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');
const popupPic = document.querySelector('.popup_type_pic');
const closeBtnProfile = popupProfile.querySelector('.popup__close');
const closeBtnCard = popupCard.querySelector('.popup__close');
const closeBtnPic = popupPic.querySelector('.popup__close');
const popupPicImg = popupPic.querySelector('.popup__image');
const popupPicTitle = popupPic.querySelector('.popup__image-title');
const formProfile = document.querySelector('.popup__container_type_profile');
const nameInputProfile = formProfile.querySelector('.popup__input_username');
const jobInputProfile = formProfile.querySelector('.popup__input_userjob');
const username = document.querySelector('.profile__name');
const userjob = document.querySelector('.profile__job');
const formCard = document.querySelector('.popup__container_type_card');
const nameInputCard = formCard.querySelector('.popup__input_titlecard');
const linkInputCard = formCard.querySelector('.popup__input_urlcard');
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template').content.querySelector('.elements__element');

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
}
function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}
function openProfileInfo() {
  nameInputProfile.value = username.textContent;
  jobInputProfile.value = userjob.textContent;
  openPopup(popupProfile);
}
function formProfileHandler(evt) {
  evt.preventDefault();
  username.textContent = nameInputProfile.value;
  userjob.textContent = jobInputProfile.value;
  closePopup(popupProfile);
}
initialCards.reverse().forEach(initialCard => {
  renderCard(initialCard);
});
function openPopupPic(evt) {
  popupPicImg.src = evt.target.src;
  popupPicImg.alt = evt.target.alt;
  popupPicTitle.textContent = evt.target.alt;
  openPopup(popupPic);
}
function delBtnHandler(evt) {
  evt.target.closest('.elements__element').remove();
}
function likeBtnHandler(evt) {
  evt.target.classList.toggle('elements__heart_active');
}
function formCardHandler(evt) {
  evt.preventDefault();
  renderCard({ link: linkInputCard.value, name: nameInputCard.value });
  closePopup(popupCard);
  evt.target.reset();
}
function createCard({ link, name }) {
  const initialCardsElement = cardTemplate.cloneNode(true);
  initialCardsElement.querySelector('.elements__image').src = link;
  initialCardsElement.querySelector('.elements__image').alt = name;
  initialCardsElement.querySelector('.elements__name').textContent = name;
  initialCardsElement.querySelector('.elements__image').addEventListener('click', openPopupPic);
  const delBtnCard = initialCardsElement.querySelector('.elements__trash');
  const likeBtnCard = initialCardsElement.querySelector('.elements__heart');
  delBtnCard.addEventListener('click', delBtnHandler);
  likeBtnCard.addEventListener('click', likeBtnHandler);
  return initialCardsElement;
}
function renderCard(card) {
  cardsList.prepend(createCard(card));
}

openBtnProfile.addEventListener('click', openProfileInfo);
openBtnCard.addEventListener('click', () => { openPopup(popupCard) });
closeBtnProfile.addEventListener('click', () => { closePopup(popupProfile) });
closeBtnCard.addEventListener('click', () => { closePopup(popupCard) });
closeBtnPic.addEventListener('click', () => { closePopup(popupPic) });
formProfile.addEventListener('submit', formProfileHandler);
formCard.addEventListener('submit', formCardHandler);