import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupConfig, formName, inputSelector, errorsResetInputsCallBack, errorsResetBtnCallBack, submitCallBack, getterCallBack = null) {
        
        super(popupSelector, popupConfig);
        
        this._formName = formName;
        this._inputSelector = inputSelector;
        this._errorsResetInputsCallBack = errorsResetInputsCallBack;
        this._errorsResetBtnCallBack = errorsResetBtnCallBack;
        this._submitCallBack = submitCallBack;
        this._getterCallBack = getterCallBack;
        this._formElement = document.forms[this._formName];
        this._inputList = Array.from(this._formElement.querySelectorAll(`.${this._inputSelector}`));
    }

    _getInputValues = () => {
        const values = {};
        this._inputList.forEach((inputElement) => {
            values[inputElement.id.slice(6)] = inputElement.value;
        });
        return values;
    }

    _setInputValues(values) {
        this._inputList.forEach((inputElement) => {
            inputElement.value = values[inputElement.id.slice(6)];
        });
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._submitCallBack(this._getInputValues());
        this.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleSubmit);
    }

    open() {
        if (this._getterCallBack) {
            this._setInputValues(this._getterCallBack());
        }
        this._errorsResetInputsCallBack();
        this._errorsResetBtnCallBack();
        super.open();
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}