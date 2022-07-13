export default class Popup {
    constructor (popupSelector, { activeModifier, closeBtnSelector }) {
        this._popupSelector = popupSelector;
        this._activeModifier = activeModifier;
        this._closeBtnSelector = closeBtnSelector;
        this._popup = document.querySelector(`.${this._popupSelector}`);
        this._closeBtn = this._popup.querySelector(`.${this._closeBtnSelector}`);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
          this.close();
        }
    }

    _handleCloseOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close();
        }
    }

    _handleCloseBtnClick = () => {
        this.close();
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
        this._closeBtn.addEventListener('click', this._handleCloseBtnClick);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);    
        this._popup.classList.add(this._activeModifier);
    }
    
    close() {
        this._popup.classList.remove(this._activeModifier);
        document.removeEventListener('keydown', this._handleEscClose);
    }
}