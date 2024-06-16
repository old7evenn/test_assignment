export const validationRules = {
  name: {
    required: "Ім'я користувача має містити від 2 до 60 символів.",
    minLength: {
      value: 2,
      message: "Ім'я користувача має містити від 2 до 60 символів.",
    },
    maxLength: {
      value: 60,
      message: "Ім'я користувача має містити від 2 до 60 символів.",
    },
  },
  email: {
    required: "Введіть дійсну електронну адресу.",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Введіть дійсну електронну адресу.",
    },
  },
  phone: {
    required: "Номер телефону має починатися з +380 і мати 12 цифр.",
    pattern: {
      value: /^\+380\d{9}$/,
      message: "Номер телефону має починатися з +380 і мати 12 цифр.",
    },
  },
}

export const inputProps = {
  name: {
    name: "name",
    type: "text",
    placeholder: "Your name",
    rules: validationRules.name,
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "Email",
    rules: validationRules.email,
  },
  phone: {
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    rules: validationRules.phone,
  },
};