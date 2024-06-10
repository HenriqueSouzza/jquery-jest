import { generateForm } from '../__mock__/html';

describe('form.js', () => {
  beforeAll(() => {
    document.body.innerHTML = generateForm({ username: '', password: '' });
  })

  it('should call false with the inputs empty"', () => {
    require('./form.js');
    expect($.makeLogin()).toBe(false);
  });

  it('should call true with the inputs filled correctly"', () => {
    $('#username').val('henrique');
    $('#password').val('123');

    require('./form.js');
    expect($.makeLogin()).toBe(true);
  });
})