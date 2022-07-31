import '../pages/index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from "../components/PopupWithImage.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  profilePopupBtn,
  newCardPopupBtn,
  avatarPopupBtn,
  profilePopupSelector,
  newCardPopupSelector,
  imagePopupSelector,
  deleteCardPopupSelector,
  avatarPopupSelector,
  profileFormName,
  newCardFormName,
  deleteCardFormName,
  avatarFormName,
  cardsContainerSelector,
  templateContent,
  inputSelector,
  formValidators,
  validationConfig,
  popupConfig,
  profilePopupConfig,
  imagePopupConfig,
  addCardBtnText,
  delCardBtnText,
  saveBtnText,
} from '../utils/constants.js';

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

const popupImage = new PopupWithImage(
  imagePopupSelector,
  popupConfig,
  imagePopupConfig,
);
popupImage.setEventListeners();

const deleteCardPopup = new PopupWithDelete(
  deleteCardPopupSelector,
  popupConfig,
  deleteCardFormName,
  removeCardHandler,
  delCardBtnText,
);
deleteCardPopup.setEventListeners();

function removeCardHandler(cardId, removeCardCallBack, changeButtonTextCallBack, closePopupCallBack) {
  changeButtonTextCallBack(true);
  api.deleteCard(cardId)
  .then(() => {
    removeCardCallBack();
    closePopupCallBack();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    changeButtonTextCallBack(false);
  });
}

function handleImageClick(name, link) {
  popupImage.open(name, link);
};

function handleDeleteAgree(cardId, deleteCardCallBack) {
  deleteCardPopup.open(cardId, deleteCardCallBack);
};

const createCard = (item) => {
  const card = new Card(
    item,
    user.id,
    templateContent,
    {
      openImageHandler: handleImageClick,
      deleteCardHandler: handleDeleteAgree,
      cardLikeHandler: handleLikeClick
    }
  );
  return card.getCard();
}

function handleLikeClick(cardId, isLiked, setLikesCallBack) {
  api.switchLike(cardId, isLiked)
  .then(({ likes }) => {
    setLikesCallBack(likes);
  })
  .catch((err) => {
    console.log(err);
  });
}

const cardsContainer = new Section({ renderer: createCard }, cardsContainerSelector);

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(validationConfig, formElement);
  formValidators[formElement.name].enableValidation();
});

const popupNewCard = new PopupWithForm(
  newCardPopupSelector,
  popupConfig,
  newCardFormName,
  inputSelector,
  formValidators[newCardFormName].hideInputErrors,
  formValidators[newCardFormName].toggleButtonState,
  addCardHandler,
  addCardBtnText,
);
popupNewCard.setEventListeners();

const handleNewCardPopupOpen = () => popupNewCard.open();
newCardPopupBtn.addEventListener('click', handleNewCardPopupOpen);

function addCardHandler(item, changeButtonTextCallBack, closePopupCallBack) {
  changeButtonTextCallBack(true);
  api.addCard(item.name, item.link)
  .then((res) => {
    cardsContainer.addItem(res);
    closePopupCallBack();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    changeButtonTextCallBack(false);
  });
}

const user = new UserInfo(profilePopupConfig);

const popupProfile = new PopupWithForm(
  profilePopupSelector,
  popupConfig,
  profileFormName,
  inputSelector,
  formValidators[profileFormName].hideInputErrors,
  formValidators[profileFormName].toggleButtonState,
  editUserInfoHandler,
  saveBtnText,
  user.getUserInfo,
);
popupProfile.setEventListeners();

const handleProfilePopupOpen = () => popupProfile.open();
profilePopupBtn.addEventListener('click', handleProfilePopupOpen);

function editUserInfoHandler(profileData, changeButtonTextCallBack, closePopupCallBack) {
  changeButtonTextCallBack(true);
  api.editUserInfo(profileData.title, profileData.job)
  .then((res) => {
    user.setUserInfo(res);
    closePopupCallBack();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    changeButtonTextCallBack(false);
  }); 
}

const popupNewAvatar = new PopupWithForm(
  avatarPopupSelector,
  popupConfig,
  avatarFormName,
  inputSelector,
  formValidators[avatarFormName].hideInputErrors,
  formValidators[avatarFormName].toggleButtonState,
  editAvatarHandler,
  saveBtnText,
  user.getUserAvatar,
);
popupNewAvatar.setEventListeners();

const handlePopupNewAvatarOpen = () => popupNewAvatar.open();
avatarPopupBtn.addEventListener('click', handlePopupNewAvatarOpen);

function editAvatarHandler(data, changeButtonTextCallBack, closePopupCallBack) {
  changeButtonTextCallBack(true);
  api.editAvatar(data.avatar)
  .then((profileAvatar) => {
      user.setUserInfo(profileAvatar);
      closePopupCallBack();
  })
  .catch((err) => {
      console.dir(err);
  })
  .finally(() => {
      changeButtonTextCallBack(false);
  });
}

Promise.all([api.getUser(), api.getCards()])
.then(([profileData, cards]) => {
  user.setUserInfo(profileData);
  cardsContainer.rendererItems(cards);
})
.catch((err) => {
  console.log(err);
});