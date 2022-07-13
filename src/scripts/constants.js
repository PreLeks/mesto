export const initialCards = [
  {
    name: 'Якутия',
    link: 'https://masterokblog.ru/wp-content/uploads/d1377d21116ef36f54ca-9.jpg',
    //alt: 'Ленские столбы'
  },
  {
    name: 'Республика Коми',
    link: 'https://murmansk1.sletat.ru/81YLenK0E6M.jpg',
    //alt: 'Столбы выветривания'
  },
  {
    name: 'Калининградская область',
    link: 'https://s3.nat-geo.ru/images/2019/5/14/b6721a8cf1f74ba0a5d28ee0cc4b47be.max-2500x1500.jpg',
    //alt: 'Куршская коса'
  },
  {
    name: 'Восточная Сибирь',
    link: 'https://placepic.ru/wp-content/uploads/2018/10/1829368_ozero-baikal-foto-zimoi-1.jpg',
    //alt: 'Озеро Байкал'
  },
  {
    name: 'Сочи, Краснодарский край',
    link: 'https://s3.nat-geo.ru/images/2019/10/25/656679d5bcdc4bde99b9d6ffcb6fa6ce.max-2500x1500.jpg',
    //alt: 'Агурские водопады'
  },
  {
    name: 'Республика Башкортостан',
    link: 'https://cdn.fishki.net/upload/post/2021/08/10/3880999/947b296ef325c7bfef21cb29bb09c4d2.jpg',
    //alt: 'Горы Шиханы'
  }
];

export const profilePopupBtn = document.querySelector('.profile__editBtn_popup');
export const newCardPopupBtn = document.querySelector('.profile__addBtn_popup');
export const profilePopupSelector = 'popup_type_edit';
export const newCardPopupSelector = 'popup_type_add';
export const imagePopupSelector = 'popup_type_pic';
export const profileFormName = 'editProfile';
export const newCardFormName = 'addNewCard';
export const cardsContainerSelector = 'elements';
export const templateSelector = '.template';
export const inputSelector = 'popup__input';
export const formValidators = {};

export const validationConfig = {
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const popupConfig = {
  activeModifier: 'popup_opened',
  closeBtnSelector: 'popup__close',
};

export const profilePopupConfig = {
  userNameSelector: 'profile__name',
  userJobSelector: 'profile__job',
};

export const imagePopupConfig = {
  imageSelector: 'popup__image',
  captionSelector: 'popup__image-title',
};