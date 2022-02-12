
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new window.JustValidate('.cont__form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
      strength: {custom: '^[a-zA-Zа-яА-я]+$'}
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },

  submitHandler: function(form) {
    let formData = new FormData(form);

    fetch('sendmail.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Отправлено');
      form.reset();
    })
    .catch(() => console.log('Ошибка'));
  }
});
