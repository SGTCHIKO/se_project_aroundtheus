const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
  }
]

/* -------------------------------------------------------------------------- */
/*                               QUERY SELECTOR                               */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const profileModalCloseButton = document.querySelector("#modal__close-profile-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileSaveButton = document.querySelector(".modal__save-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close-button");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const cardTitleInput = addCardFormElement.querySelector(".modal__input_type_title");
const cardTitleUrl = addCardFormElement.querySelector(".modal__input_type_url");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageModalClose = document.querySelector("#preview-modal-close");
const cardPreviewTitle = document.querySelector("#card-preview-title");
const previewImage = document.querySelector("#card-preview-image");
/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

function closePopop(modal){
  modal.classList.remove("modal_opened");
};

function openPopop(modal){
  modal.classList.add("modal_opened");
};

function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__name");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button")

    cardImageEl.addEventListener("click", () => {
      openPopop(previewImageModal);
      previewImage.src = cardImageEl.src;
      previewImage.alt = cardTitleEl.textContent;
      cardPreviewTitle.textContent = cardTitleEl.textContent;
    });

    deleteButton.addEventListener("click", () => {
      cardElement.remove();
    });

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });

    cardImageEl.src = cardData.link;
    cardImageEl.alt = "Image of" + " " + cardData.name;
    cardTitleEl.textContent = cardData.name;

    return cardElement;
};

function renderCard(cardData, cardListEl){
   const cardElement = getCardElement(cardData);
   cardListEl.prepend(cardElement);
};

function handleAddCardSubmit(evt){
    evt.preventDefault();
    const name = cardTitleInput.value;
    const link = cardTitleUrl.value;
    const cardElement = getCardElement({name,link});
    cardListEl.prepend(cardElement);
    closePopop(addCardModal);
    addCardFormElement.reset();
};

function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopop(profileEditModal);
};

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENER                               */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopop(profileEditModal);
});

profileModalCloseButton.addEventListener("click", () => closePopop(profileEditModal));
profileEditForm.addEventListener("submit",handleProfileEditSubmit);
addNewCardButton.addEventListener("click", () => openPopop(addCardModal));
addCardModalCloseButton.addEventListener("click", () => closePopop(addCardModal));
addCardFormElement.addEventListener("submit",handleAddCardSubmit);

previewImageModalClose.addEventListener("click", () => closePopop(previewImageModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));