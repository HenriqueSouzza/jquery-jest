export default {
  inputValues: {
    initials: [
      { name: 'username', value: '' },
      { name: 'password', value: '' }
    ],
    expected: {
      username: '',
      password: ''
    },
    userPermitted: {
      username: 'henrique',
      password: '123'
    },
    userNotPermitted: {
      username: '',
      password: ''
    }
  },
};