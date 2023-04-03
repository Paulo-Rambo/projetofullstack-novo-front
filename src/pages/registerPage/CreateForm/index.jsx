import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyle } from "./style";
import { Button } from "../../../styles/Button";
import { InputDiv } from "../../../styles/InputDiv";
import { ErrorParagraph } from "../../../styles/ErrorMessage";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
import { registerSchema } from "../../../schemas/registerSchema";

export default function CreateForm() {
  const { registerFormAction, formSelect } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(registerFormAction)}>
      <div className="titleForm">{
        formSelect?
        <h3>Cadastrar cliente</h3>:
        <h3>Cadastrar contato</h3>
      }
      </div>
      <InputDiv>
        <label htmlFor="name">Seu nome completo</label>
        <input
          id="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <ErrorParagraph>{errors.name?.message}</ErrorParagraph>
      </InputDiv>
      <InputDiv>
        <label htmlFor="email">Seu e-mail principal</label>
        <input
          id="email"
          type="text"
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        />
        <ErrorParagraph>{errors.email?.message}</ErrorParagraph>
      </InputDiv>
      <InputDiv>
        <label htmlFor="password">Coloque sua senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <ErrorParagraph>{errors.password?.message}</ErrorParagraph>
      </InputDiv>
      <InputDiv>
        <label htmlFor="password2">Digite sua senha novamente</label>
        <input
          id="password2"
          type="password"
          placeholder="Confirme sua senha"
          {...register("password2")}
        />
        <ErrorParagraph>{errors.password2?.message}</ErrorParagraph>
      </InputDiv>
      <InputDiv>
        <label htmlFor="telephone">Telefone</label>
        <input
          id="telephone"
          type="text"
          placeholder="Seu número de telefone"
          {...register("telephone")}
        />
        <ErrorParagraph>{errors.telephone?.message}</ErrorParagraph>
      </InputDiv>
      <Button
        background={"var(--color-grey-1)"}
        hover={"var(--color-grey-2)"}
        type="submit"
        width="100%"
      >
        Registrar
      </Button>
    </FormStyle>
  );
}
