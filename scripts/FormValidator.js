class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`));
    this._popupButton = this._form.querySelector(`.${this._submitButtonSelector}`);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._popupButton.classList.add(this._inactiveButtonClass);
      this._popupButton.disabled = true;
    } else {
      this._popupButton.classList.remove(this._inactiveButtonClass);
      this._popupButton.disabled = false;
    }
  }

  hideInputErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
    this.toggleButtonState();
  }
}

export default FormValidator;