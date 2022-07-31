export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userNameSelector = userNameSelector;
    this._userJobSelector = userJobSelector;
    this._userAvatarSelector = userAvatarSelector;
    this._userNameElement = document.querySelector(this._userNameSelector);
    this._userJobElement = document.querySelector(this._userJobSelector);
    this._userAvatarElement = document.querySelector(this._userAvatarSelector);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo = () => {
    return {
      title: this._userNameElement.textContent,
      job: this._userJobElement.textContent,
    };
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._userNameElement.textContent = name || '';
    this._about = about;
    this._userJobElement.textContent = about || '';
    this._avatar = avatar;
    this._userAvatarElement.style.backgroundImage = `url('${ this._avatar }')`;
    this._id = _id;
  }

  getUserAvatar = () => {
    return {
      avatar: this._avatar,
    };
  }

  get id() {
    return this._id;
  }
}