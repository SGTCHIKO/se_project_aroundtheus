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
/* Elements*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const modalCloseButton = document.querySelector("#modal__close-profile-button");

const profileTitleInput = document.querySelector("#profile-title-input");
const profileTitle = document.querySelector(".profile__title");

const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileDescription = document.querySelector(".profile__description");

profileSaveButton = document.querySelector(".modal__save-button");


profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
});

modalCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal__opened");
});


profileSaveButton.addEventListener("click", (evt) => {
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  evt.preventDefault();
  profileEditModal.classList.remove("modal__opened");
});
