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
  const closeButton = document.querySelector(".modalButtonClose");
  const modalContainer = document.querySelector(".modalController");
  closeButton.addEventListener("click", () => {
    modalContainer.close();
  });
}
