const initialCards = [
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
    link: 'https://cdn.culture.ru/images/934f051a-0d5c-5bd8-abc6-3ef7d9250757',
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
let formProfile = document.querySelector('.popup__container_type_profile');
let nameInputProfile = formProfile.querySelector('.popup__input_username');
let jobInputProfile = formProfile.querySelector('.popup__input_userjob');
let username = document.querySelector('.profile__name');
let userjob = document.querySelector('.profile__job');
let formCard = document.querySelector('.popup__container_type_card');
let nameInputCard = formCard.querySelector('.popup__input_titlecard');
let linkInputCard = formCard.querySelector('.popup__input_urlcard');
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template').content.querySelector('.elements__element');

function openPopup(namePopup) {
  namePopup.classList.add('popup_opened');
}
function closePopup(namePopup) {
  namePopup.classList.remove('popup_opened');
}
function popupProfileInfo() {
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
initialCards.forEach(i => {
  const initialCard = createCard(i);
  renderCard(initialCard);
});
function openPopupPic(evt) {
  popupPicImg.src = evt.target.src;
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
  const userCard = createCard({ link: linkInputCard.value, name: nameInputCard.value });
  renderCard(userCard);
  closePopup(popupCard);
  evt.target.reset();
}
function createCard(item) {
  const initialCardsElement = cardTemplate.cloneNode(true);
  initialCardsElement.querySelector('.elements__image').src = item.link;
  initialCardsElement.querySelector('.elements__image').alt = item.name;
  initialCardsElement.querySelector('.elements__name').textContent = item.name;
  initialCardsElement.querySelector('.elements__image').addEventListener('click', openPopupPic);
  const delBtnCard = initialCardsElement.querySelector('.elements__trash');
  const likeBtnCard = initialCardsElement.querySelector('.elements__heart');
  delBtnCard.addEventListener('click', delBtnHandler);
  likeBtnCard.addEventListener('click', likeBtnHandler);
  return initialCardsElement;
}
function renderCard(name) {
  cardsList.prepend(name);
}
openBtnProfile.addEventListener('click', popupProfileInfo);
openBtnCard.addEventListener('click', () => { openPopup(popupCard); });
closeBtnProfile.addEventListener('click', () => { closePopup(popupProfile) });
closeBtnCard.addEventListener('click', () => { closePopup(popupCard) });
closeBtnPic.addEventListener('click', () => { closePopup(popupPic) });
formProfile.addEventListener('submit', formProfileHandler);
formCard.addEventListener('submit', formCardHandler);