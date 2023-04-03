import * as yup from "yup";

export const loginSchema = yup.object().shape({
    password: yup.string().required("Coloque a senha!"),
    email: yup
      .string()
      .required("Coloque seu e-mail!")
      .email("E-mail inválido"),
  });