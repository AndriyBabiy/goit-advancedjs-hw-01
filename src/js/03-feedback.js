import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LS_Key = 'feedback-form-state';
let formContent = JSON.parse(localStorage.getItem(LS_Key)) || {};

const { email, message } = form.elements;

if (formContent) {
  email.value = formContent.email || "";
  message.value = formContent.message || "";
}

form.addEventListener('input', throttle(handlerInput, 500))

function handlerInput(evt) {
  formContent[evt.target.name] = evt.target.value;

  localStorage.setItem(LS_Key, JSON.stringify(formContent))
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  form.reset();

  console.log(formContent);

  localStorage.removeItem(LS_Key);
  formContent = {};
})
