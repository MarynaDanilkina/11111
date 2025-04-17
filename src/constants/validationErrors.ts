export const validationErrors = {
  userNameError: "Введите имя",
  emailError: {
    required: "Введите почту",
    format: "Неверный формат почты",
  },
  passwordError: {
    required: "Введите пароль",
    min: "Пароль должен быть не менее 8 символов",
    space: "Пароль не должен содержать пробелов",
    matchesLetters: "Пароль должен содержать буквы",
    matchesNumbers: "Пароль должен содержать цифры",
    match: "Пароли должны совпадать",
  },
  captcha: {
    required: "Пройдите проверку",
  },
  code: {
    match: "Код не совпадает",
    required: "Введите код",
  },
};
