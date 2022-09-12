export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._getResponseData);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._getResponseData);
  }

  editUserInfo(title, job) {
    const body = { name: title, about: job };
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(body),
    })
      .then(this._getResponseData);
  }

  editAvatar(userAvatar) {
    const body = { avatar: userAvatar };
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(body),
    })
      .then(this._getResponseData);
  }

  addCard(newPlace, linkPlace) {
    const body = { name: newPlace, link: linkPlace };
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(this._getResponseData);
  }

  countLikes() {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
    })
      .then(this._getResponseData);
  }

  switchLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: isLiked ? 'DELETE' : 'PUT',
    })
      .then(this._getResponseData);
  }
}