const config = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (showInputErrorConfig) => {
  const { formElement, inputElement, errorMessage, inputErrorClass, errorClass } = showInputErrorConfig;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
};

const hideInputError = (hideInputErrorConfig) => {
  const { formElement, inputElement, inputErrorClass, errorClass } = hideInputErrorConfig;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
  inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError({ formElement, inputElement, errorMessage, inputErrorClass, errorClass });
  } else {
    hideInputError({ formElement, inputElement, inputErrorClass, errorClass });
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, popupButton, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    popupButton.classList.add(inactiveButtonClass);
    popupButton.disabled = true;
  } else {
    popupButton.classList.remove(inactiveButtonClass);
    popupButton.disabled = false;
  }
};

const setEventListeners = (formElement, setEventListenersConfig) => {
  const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = setEventListenersConfig;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const popupButton = formElement.querySelector(`.${submitButtonSelector}`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, popupButton, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, popupButton, inactiveButtonClass);
};

const enableValidation = (enableValidationConfig) => {
  const { formSelector } = enableValidationConfig;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, enableValidationConfig);
  });
};
enableValidation(config);