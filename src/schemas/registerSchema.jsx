import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Coloque seu nome"),
    telephone: yup.number().required("Coloque seu telefone"),
    password: yup
      .string()
      .required("Preencha com a senha")
      .matches(/[a-zA-Z]/, "Deve conter ao menos uma letra")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{8,}/, "Deve ter no mínimo 8 digitos"),
    password2: yup
      .string()
      .oneOf([yup.ref("password")], "Senha errada")
      .required("Confirme a senha"),
    email: yup
      .string()
      .required("Preencha o campo de e-mail")
      .email("E-mail inválido"),
  });