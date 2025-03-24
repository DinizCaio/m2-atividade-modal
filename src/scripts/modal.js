/* Desenvolva seu código aqui... */
function handleModal() {
  const link = document.querySelector(".form__register-link");
  const modalContainer = document.querySelector(".modalController");
  link.addEventListener("click", () => {
    modalContainer.showModal();
    closeModal();
  });
}
handleModal();
function closeModal() {
  const modalContainer = document.querySelector(".modalController");
  const closeButton = document.querySelector(".modal__close");
  closeButton.addEventListener("click", () => {
    modalContainer.close();
  });
}
