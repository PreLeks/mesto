export default class UserInfo {
    constructor({ userNameSelector, userJobSelector }) {
        this._userNameSelector = userNameSelector;
        this._userJobSelector = userJobSelector;
        this._userNameElement = document.querySelector(`.${this._userNameSelector}`);
        this._userJobElement = document.querySelector(`.${this._userJobSelector}`);
    }

    setUserInfo(profileData) {
        this._userNameElement.textContent = profileData.title || '';
        this._userJobElement.textContent = profileData.job || '';
    }

    getUserInfo = () => {
        return {
            title: this._userNameElement.textContent,
            job: this._userJobElement.textContent,
        };
    }
}