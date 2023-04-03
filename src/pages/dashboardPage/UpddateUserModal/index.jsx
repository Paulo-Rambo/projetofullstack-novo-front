import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormStyleAdd, TitleFormAdd, UpdateModalSection } from "./style";
import { InputDiv } from "../../../styles/InputDiv";
import { Button } from "../../../styles/Button";
import { ErrorParagraph } from "../../../styles/ErrorMessage";
import { updateSchema } from "../../../schemas/updateSchema";
import { UserContext } from "../../../providers/userContext";

export default function UpdateModal() {
  const { userData, updateProfileOnClickFunc, setUpdadeModal } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateSchema),
  });

  return (
    <UpdateModalSection>
      <div className="modalBox">
        <TitleFormAdd>
          <h2>Atualizar cadastro</h2>
          <p onClick={() => setUpdadeModal(false)} className="buttonCloseModal">
            x
          </p>
        </TitleFormAdd>

        <FormStyleAdd onSubmit={handleSubmit(updateProfileOnClickFunc)}>
          <InputDiv>
            <label htmlFor="name">Nome</label>
            <input
              id="title"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
              defaultValue={userData.name}
            />
            <ErrorParagraph>{errors.name?.message}</ErrorParagraph>
          </InputDiv>
          <InputDiv>
            <label htmlFor="email">Email</label>
            <input
              id="title"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
              defaultValue={userData.email}
            />
            <ErrorParagraph>{errors.email?.message}</ErrorParagraph>
          </InputDiv>
          <InputDiv>
            <label htmlFor="telephone">Telefone</label>
            <input
              id="title"
              type="text"
              placeholder="Digite seu telefone"
              {...register("telephone")}
              defaultValue={userData.telephone}
            />
            <ErrorParagraph>{errors.telephone?.message}</ErrorParagraph>
          </InputDiv>
          <InputDiv>
            <label htmlFor="password">Password</label>
            <input
              id="title"
              type="text"
              placeholder="Digite seu novo password"
              {...register("password")}
            />
            <ErrorParagraph>{errors.password?.message}</ErrorParagraph>
          </InputDiv>

          <Button
            background={"var(--color-primary)"}
            hover={"var(--color-grey-2)"}
            type="submit"
            width="100%"
          >
            Atualizar
          </Button>
        </FormStyleAdd>
      </div>
      <div onClick={() => setUpdadeModal(false)} className="modal-fade"></div>
    </UpdateModalSection>
  );
}
