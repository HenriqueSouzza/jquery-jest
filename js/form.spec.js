import { generateForm } from '../__mock__/html';
import Mocks from '../__mock__/data';

describe('form.js', () => {
  beforeAll(() => {
    document.body.innerHTML = generateForm({ username: '', password: '' });
    require('./form.js');
  });

  it('should call false with the inputs empty"', () => {
    expect($.makeLogin()).toBe(false);
  });

  it('should call true with the inputs filled correctly"', () => {
    $('#username').val('henrique');
    $('#password').val('123');

    expect($.makeLogin()).toBe(true);
  });

  it('should convert input values array to object', () => {
    expect($.mergeInputValues(Mocks.inputValues.initials)).toEqual(Mocks.inputValues.expected);
  });

  it('should call true when it sent data permitted', () => {
    expect($.isUserPermitted(Mocks.inputValues.userPermitted)).toBeTruthy();
  });

  it('should call false when it sent data not permitted', () => {
    expect($.isUserPermitted(Mocks.inputValues.userNotPermitted)).toBeFalsy();
  });
})