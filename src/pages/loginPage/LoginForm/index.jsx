import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyle, TitleForm } from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../../styles/Button";
import { InputDiv } from "../../../styles/InputDiv";
import { ErrorParagraph } from "../../../styles/ErrorMessage";
import { UserContext } from "../../../providers/userContext";
import { useContext } from "react";
import { loginSchema } from "../../../schemas/loginSchema";

export default function LoginForm() {
  const { loginFormAction, formSelect } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(loginFormAction)}>
      <TitleForm>{
        formSelect? 
        <h3>Login de cliente</h3>: 
        <h3>Login de contato</h3>
        }
      </TitleForm>
      <InputDiv>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("email")}
        />
        <ErrorParagraph>{errors.email?.message}</ErrorParagraph>
      </InputDiv>
      <InputDiv>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <ErrorParagraph>{errors.password?.message}</ErrorParagraph>
      </InputDiv>
      <Button
        background={"var(--color-grey-1)"}
        hover={"var(--color-grey-2)"}
        type="submit"
        width="100%"
      >
        Login
      </Button>
      <TitleForm>
        <Link to={`/register`}>
          <Button
            background={"var(--color-grey-1)"}
            hover={"var(--color-grey-2)"}
            width="100%"
          >
            Cadastre-se
          </Button>
        </Link>
      </TitleForm>
    </FormStyle>
  );
}
