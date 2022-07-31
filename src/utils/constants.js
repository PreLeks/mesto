export const profilePopupBtn = document.querySelector('.profile__editBtn_popup');
export const newCardPopupBtn = document.querySelector('.profile__addBtn_popup');
export const avatarPopupBtn = document.querySelector('.profile__avatar');
export const profilePopupSelector = '.popup_type_edit';
export const newCardPopupSelector = '.popup_type_add';
export const imagePopupSelector = '.popup_type_pic';
export const deleteCardPopupSelector = '.popup_type_del';
export const avatarPopupSelector = '.popup_type_avatar';
export const profileFormName = 'editProfile';
export const newCardFormName = 'addNewCard';
export const deleteCardFormName = 'deleteCard';
export const avatarFormName = 'updateAvatar';
export const cardsContainerSelector = '.elements';
export const templateContent = '.template';
export const inputSelector = '.popup__input';
export const formValidators = {};

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const popupConfig = {
  activeModifier: 'popup_opened',
  closeBtnSelector: '.popup__close',
};

export const profilePopupConfig = {
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__job',
  userAvatarSelector: '.profile__avatar',
};

export const imagePopupConfig = {
  imageSelector: '.popup__image',
  captionSelector: '.popup__image-title',
};

export const addCardBtnText = {
  btnText: 'Создать',
  changeBtnText: 'Сохранение...',
};

export const delCardBtnText = {
  btnText: 'Да',
  changeBtnText: 'Удаление...',
};

export const saveBtnText = {
  btnText: 'Сохранить',
  changeBtnText: 'Сохранение...',
};