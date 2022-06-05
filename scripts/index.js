const profileOpeningButton = document.querySelector('.profile__editBtn_popup');
const cardOpeningButton = document.querySelector('.profile__addBtn_popup');
const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');
const popupPic = document.querySelector('.popup_type_pic');
const profileCloseButton = popupProfile.querySelector('.popup__close');
const cardCloseButton = popupCard.querySelector('.popup__close');
const picCloseButton = popupPic.querySelector('.popup__close');
const popupPicImg = popupPic.querySelector('.popup__image');
const popupPicTitle = popupPic.querySelector('.popup__image-title');
const formProfile = document.querySelector('.popup__form_type_profile');
const nameInputProfile = formProfile.querySelector('.popup__input_username');
const jobInputProfile = formProfile.querySelector('.popup__input_userjob');
const username = document.querySelector('.profile__name');
const userjob = document.querySelector('.profile__job');
const formCard = document.querySelector('.popup__form_type_card');
const nameInputCard = formCard.querySelector('.popup__input_titlecard');
const linkInputCard = formCard.querySelector('.popup__input_urlcard');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template').content.querySelector('.elements__element');
const popupButton = formCard.querySelector('.popup__button');

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};
function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  namePopup.addEventListener('mousedown', closePopupOverlay);
}
function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  namePopup.removeEventListener('mousedown', closePopupOverlay);
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
function openPopupPic({ link, name }) {
  popupPicImg.src = link;
  popupPicImg.alt = name;
  popupPicTitle.textContent = name;
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
  formCard.reset();
  popupButton.disabled = true;
  popupButton.classList.add('popup__button_disabled');
  closePopup(popupCard);
}
function createCard({ link, name }) {
  const initialCardsElement = cardTemplate.cloneNode(true);
  const cardImage = initialCardsElement.querySelector('.elements__image');
  const cardName = initialCardsElement.querySelector('.elements__name');
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;
  cardImage.addEventListener('click', () => openPopupPic({ link, name }));
  const cardDeletionButton = initialCardsElement.querySelector('.elements__trash');
  const сardLikeButton = initialCardsElement.querySelector('.elements__heart');
  cardDeletionButton.addEventListener('click', delBtnHandler);
  сardLikeButton.addEventListener('click', likeBtnHandler);
  return initialCardsElement;
}
function renderCard(card) {
  cardsContainer.prepend(createCard(card));
}

profileOpeningButton.addEventListener('click', openProfileInfo);
cardOpeningButton.addEventListener('click', () => { openPopup(popupCard) });
profileCloseButton.addEventListener('click', () => { closePopup(popupProfile) });
cardCloseButton.addEventListener('click', () => { closePopup(popupCard) });
picCloseButton.addEventListener('click', () => { closePopup(popupPic) });
formProfile.addEventListener('submit', formProfileHandler);
formCard.addEventListener('submit', formCardHandler);