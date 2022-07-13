export default class Card {
    constructor({ link, name }, handleCardClick, templateSelector) {
        this._link = link;
        this._name = name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element');
        const initialCardsElement = cardTemplate.cloneNode(true);
        this._element = initialCardsElement;
    }

    _generateCard() {
        this._image = this._element.querySelector('.elements__image');
        this._delBtn = this._element.querySelector('.elements__trash');
        this._likeBtn = this._element.querySelector('.elements__heart');
        this._title = this._element.querySelector('.elements__name');
    }

    _fillData() {
        this._image.src = this._link;
        this._image.alt = this._name;
        this._title.textContent = this._name;
    }

    _setEventListeners() {
        this._image.addEventListener('click', this._handleImageClick);
        this._likeBtn.addEventListener('click', this._likeBtnHandler);
        this._delBtn.addEventListener('click', this._delBtnHandler);
    }

    _handleImageClick = () => {
        this._handleCardClick({ link: this._link, name: this._name });
    }

    _likeBtnHandler = () => {
        this._likeBtn.classList.toggle('elements__heart_active');
    }

    _delBtnHandler = () => {
        this._element.remove();
    }

    getCard() {
        this._getTemplate();
        this._generateCard();
        this._fillData();
        this._setEventListeners();
        return this._element;
    }
}