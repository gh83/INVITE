const form = document.querySelector('.form-input');
const button = form.querySelector('.button-submit');
const name = form.querySelector('.name');
const email = form.querySelector('.email');
const phone = form.querySelector('.phone');
const message = form.querySelector('.message');
const fields = form.querySelectorAll('.form-input__control');

let emailTimeout = undefined;
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener('input', e => {
  emailTimeout && clearTimeout(emailTimeout);
  emailTimeout = setTimeout(() => {
    let iscorrect = reEmail.test(String(e.target.value).toLowerCase());
    if (iscorrect) {
      email.classList.remove('error');
    } else {
      email.classList.add('error')
    }
  }, 300);
});

let phoneTimeout = undefined;
const rePhone = /^((\+7|7|8)+([0-9]){10})$/;
phone.addEventListener('input', e => {
  phoneTimeout && clearTimeout(phoneTimeout);
  phoneTimeout = setTimeout(() => {
    let iscorrect = rePhone.test(String(e.target.value));
    if (iscorrect) {
      phone.classList.remove('error');
    } else {
      phone.classList.add('error')
    }
  }, 300);
});

let nameTimeout = undefined;
name.addEventListener('input', e => {
  nameTimeout && clearTimeout(nameTimeout);
  nameTimeout = setTimeout(() => {
    let iscorrect = String(e.target.value);
    if (iscorrect) {
      name.classList.remove('error');
    } else {
      name.classList.add('error')
    }
  }, 300);
});


let messageTimeout = undefined;
name.addEventListener('input', e => {
  messageTimeout && clearTimeout(messageTimeout);
  messageTimeout = setTimeout(() => {
    let iscorrect = String(e.target.value);
    if (iscorrect) {
      message.classList.remove('error');
    } else {
      message.classList.add('error')
    }
  }, 300);
});


form.addEventListener('submit', function (e) {
  e.preventDefault();

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].classList.add('error')
    } else {
      fields[i].classList.remove('error')
    }
  }
});