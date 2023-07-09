function showInputError(formEl,inputEl,{inputErrorClass,errorClass}){
  const errorMessageEL = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEL.textContent = inputEl.validationMessage;
  errorMessageEL.classList.add(errorClass);
}

function hideInputError(formEl,inputEl, {inputErrorClass,errorClass}){
  const errorMessageEL = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEL.textContent = "";
  errorMessageEL.classList.remove(errorClass);
}


function checkInputValidity(formEl,inputEl,options){
  if(!inputEl.validity.valid){
    return showInputError(formEl,inputEl,options);
  }
    hideInputError(formEl,inputEl,options);
}


function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid)
}


function toggleButtonState(inputEls,submitButton,{inactiveButtonClass}) {
  if(hasInvalidInput(inputEls)){
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  };
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}


function setEventListeners(formEl,options) {
  const {inputSelector} = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector('.modal__save-button');
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
       checkInputValidity(formEl,inputEl,options);
       toggleButtonState(inputEls,submitButton,options);
    });
  });
}


function enableValidation(options) {
  const formsEls = [...document.querySelectorAll(options.formSelector)];
  formsEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
};


const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: ".modal__button-disabled",
  inputErrorClass: ".modal__input_type-error",
  errorClass: ".modal__error_visible",
};


enableValidation(config)