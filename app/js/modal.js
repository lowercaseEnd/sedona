//modals
let modalSuccess = document.getElementsByClassName("modal")[0];
let modalFailure = document.getElementsByClassName("modal")[1];
let closePopupSuccess = document.getElementsByClassName("modal__button")[0];
let closePopupFailure = document.getElementsByClassName("modal__button")[1];
//send button
let buttonSend = document.getElementById("send-btn");
//name and contact info
let name = document.getElementsByClassName("input-text");
console.log(name[0]);
buttonSend.addEventListener("click", (event) => {
  event.preventDefault();
  for(let form of name) {
    if(!form.value) {
      modalFailure.classList.add("modal-show");
      break;
    }
  }
  if(!modalFailure.classList.contains("modal-show")) {
    modalSuccess.classList.add("modal-show");
  }
});

closePopupFailure.addEventListener("click", (event) => {
  closeWindows(event);
});
closePopupSuccess.addEventListener("click", (event) => {
  closeWindows(event);
});

function closeWindows(event) {
  event.preventDefault();
  if(modalFailure.classList.contains("modal-show")) {
    modalFailure.classList.remove("modal-show");
  }
  if(modalSuccess.classList.contains("modal-show")) {
    modalSuccess.classList.remove("modal-show");
  }
}