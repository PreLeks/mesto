import '../pages/index.css';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';

import {
  initialCards,
  profilePopupBtn,
  newCardPopupBtn,
  profilePopupSelector,
  newCardPopupSelector,
  imagePopupSelector,
  profileFormName,
  newCardFormName,
  cardsContainerSelector,
  templateSelector,
  inputSelector,
  formValidators,
  validationConfig,
  popupConfig,
  profilePopupConfig,
  imagePopupConfig,
} from './constants.js';

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(validationConfig, formElement);
  formValidators[formElement.name].enableValidation();
});

const popupImage = new PopupWithImage(
  imagePopupSelector,
  popupConfig,
  imagePopupConfig,
);
popupImage.setEventListeners();

const handleImageClick = ({ name, link }) => popupImage.open({ name, link });

const createCard = ({ name, link }) => {
  const card = new Card({ name, link }, handleImageClick, templateSelector);
  return card.getCard();
}

const cardsContainer = new Section({
  cards: initialCards.reverse(),
  render: createCard,
}, cardsContainerSelector,
);
cardsContainer.renderAll();

const handleCardSubmit = ({ name, link }) => cardsContainer.addCard({ name, link });

const popupNewCard = new PopupWithForm(
  newCardPopupSelector,
  popupConfig,
  newCardFormName,
  inputSelector,
  formValidators[newCardFormName].hideInputErrors,
  formValidators[newCardFormName].toggleButtonState,
  handleCardSubmit,
);
popupNewCard.setEventListeners();

const user = new UserInfo(profilePopupConfig);

const handleProfileSubmit = (profileData) => user.setUserInfo(profileData);

const popupProfile = new PopupWithForm(
  profilePopupSelector,
  popupConfig,
  profileFormName,
  inputSelector,
  formValidators[profileFormName].hideInputErrors,
  formValidators[profileFormName].toggleButtonState,
  handleProfileSubmit,
  user.getUserInfo,
);
popupProfile.setEventListeners();

const handleProfilePopupOpen = () => popupProfile.open();
const handleNewCardPopupOpen = () => popupNewCard.open();

profilePopupBtn.addEventListener('click', handleProfilePopupOpen);
newCardPopupBtn.addEventListener('click', handleNewCardPopupOpen);