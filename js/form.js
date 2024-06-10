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
    user: 'henrique',
    password: '123'
  }
];

$.getInputValues = () => {
  return Elements.form.serializeArray();
}

$.filterValues = (values = {}) => {
  return { ...values, user: values.username }
}

$.mergeInputValues = (inputValues = []) => {
  const values = {}
  inputValues.forEach(inputValue => values[inputValue.name] = inputValue.value);
  return values;
}

$.isUserPermitted = (user = null, password = null) => {
  return userListPermitted.find(userPermitted => userPermitted.user == user && userPermitted.password == password)
}

$.makeLogin = () => {
  const inputValues = $.getInputValues();

  if (!inputValues.length) {
    return false;
  }

  const values = $.filterValues($.mergeInputValues(inputValues));

  return !!$.isUserPermitted(values.user, values.password);
}

$.setHtmlFeedback = (isError = false) => {
  Elements.sectionFeedback.fadeIn().text(isError ? Feedback.error : Feedback.success);
}

Elements.button.on('click', function (e) {
  e.preventDefault();
  $.setHtmlFeedback($.makeLogin());
})
