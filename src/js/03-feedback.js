import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LS_Key = 'feedback-form-state';
const formContent = {
}

form.elements.email.value
  = localStorage.getItem(LS_Key)
  ? JSON.parse(localStorage.getItem(LS_Key)).email
  : "";
form.elements.message.value
  = localStorage.getItem(LS_Key)
  ? JSON.parse(localStorage.getItem(LS_Key)).message
  : "";

form.addEventListener('input', throttle(handlerInput, 500))

function handlerInput(evt) {
  formContent[evt.target.name] = evt.target.value;

  localStorage.setItem(LS_Key, JSON.stringify(formContent))
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  form.reset();

  console.log(JSON.parse(localStorage.getItem(LS_Key)));

  localStorage.removeItem(LS_Key);
})
