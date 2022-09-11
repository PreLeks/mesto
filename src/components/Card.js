export default class Card {
  constructor(
    { name, link, _id, likes, owner: { _id: ownerId } },
    userId,
    templateContent,
    { openImageHandler, deleteCardHandler, cardLikeHandler }
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likes = likes;
    this._isOwner = userId === ownerId;
    this._userId = userId;
    this._templateContent = templateContent;
    this._handleOpenImage = openImageHandler;
    this._handleCardDelete = deleteCardHandler;
    this._handleCardLike = cardLikeHandler;
    this.getCard = this.getCard.bind(this);
    this.setLikes = this.setLikes.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateContent)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
      this._element = cardTemplate;
  }

  _setElements() {
    this._image = this._element.querySelector('.elements__image');
    this._delBtn = this._element.querySelector('.elements__trash');
    this._likeBtn = this._element.querySelector('.elements__heart');
    this._title = this._element.querySelector('.elements__name');
    this._likesCounter = this._element.querySelector('.elements__likeCounter');
  }

  _fillData() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
  }

  _isLiked() {
    return this._likes.map((likeItem) => likeItem._id).includes(this._userId);
  }

  _renderLikes() {
    if (this._isLiked()) {
      this._likeBtn.classList.add('elements__heart_active');
    } else {
      this._likeBtn.classList.remove('elements__heart_active');
    }
    this._likesCounter.textContent = this._likes.length;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._renderLikes();
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeClick = () => this._handleCardLike(this._id, this._isLiked(), this.setLikes);
  _handleDeleteClick = () => this._handleCardDelete(this._id, this.deleteCard);
  _handleImageClick = () => this._handleOpenImage({ name: this._name, link: this._link });

  _setEventListeners() {
    this._likeBtn.addEventListener('click', this._handleLikeClick);
    if (this._isOwner) {
        this._delBtn.addEventListener('click', this._handleDeleteClick);
    } else {
        this._delBtn.remove();
    }
    this._image.addEventListener('click', this._handleImageClick);
  }

  getCard() {
    this._getTemplate();
    this._setElements();
    this._fillData();
    this._renderLikes();
    this._setEventListeners();
    return this._element;
  }
}