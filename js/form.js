const Elements = {
  form: $('#form-login'),
  sectionForm: $('#section-form'),
  sectionFeedback: $('#section-feedback'),
  button: $('button')
}

const Feedback = {
  error: 'Erro ao tentar realizar login',
  success: 'Login realizado com sucesso'
}

const userListPermitted = [
  {
    username: 'henrique',
    password: '123'
  }
];

$.getInputValues = () => {
  return Elements.form.serializeArray();
}

$.mergeInputValues = (inputValues = []) => {
  const values = {}
  inputValues.forEach(inputValue => values[inputValue.name] = inputValue.value);
  return values;
}

$.isUserPermitted = ({ username = null, password = null }) => {
  return !!userListPermitted.find(userPermitted => userPermitted.username == username && userPermitted.password == password)
}

$.makeLogin = () => {
  const inputValues = $.getInputValues();

  if (!inputValues.length) {
    return false;
  }

  return $.isUserPermitted($.mergeInputValues(inputValues));
}

$.setHtmlFeedback = (isSucess = true) => {
  Elements.sectionFeedback.fadeIn().text(isSucess ? Feedback.success : Feedback.error);
}

Elements.button.on('click', function (e) {
  e.preventDefault();
  $.setHtmlFeedback($.makeLogin());
})
