import * as yup from "yup";

export const updateSchema = yup.object().shape({

    name: yup
        .string()
        .nullable()
        .notRequired(),
    telephone: yup
        .mixed()
        .test(
        (value) => {
            if (!value) {
            return true;
            }
            return yup
            .number()
            .isValidSync(value);
        })
        .notRequired(),
    password: yup
        .mixed()
        .test(
        (value) => {
            if (!value) {
            return true;
            }
            return yup
            .string()
            .matches(/[a-zA-Z]/, 'Deve conter ao menos uma letra')
            .matches(/(\d)/, 'Deve conter ao menos um número')
            .matches(/(\W)|_/, 'Deve conter um caracter especial')
            .matches(/.{8,}/, 'Deve ter no mínimo 8 digitos')
            .isValidSync(value);
        })
        .notRequired(),
    email: yup
        .string()
        .nullable()
        .notRequired()
        .email("E-mail inválido"),
});


  