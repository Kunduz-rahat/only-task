import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormGroup,
  Input,
  InputCheckbox,
  InputCheckboxText,
  InputError,
  LabelText,
} from "./styles";

type AuthFormTypes = {
  login: string;
  password: string;
};

const AuthForm: React.FC = (props) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AuthFormTypes>({mode:"onBlur"});
  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    reset()
  });

  return (
    <FormGroup>
      <form onSubmit={onSubmit}>
        <div>
          <LabelText>
            <label htmlFor="login">Логин</label>
          </LabelText>

          <div>
            
            <Input
              {...register("login", { required: "Обязательное поле" })}
              id="login"
              name="login"
              type="email"
            />
          </div>
          <div>
            {errors?.login && <InputError>{errors?.login?.message || "Error!"}</InputError>}
          </div>
        </div>
        <div>
          <LabelText>
            <label htmlFor="password">Пароль</label>
          </LabelText>
         
          <div>
            <Input
              {...register("password", { required: "Обязательное поле" })}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            {errors?.password && <InputError>{errors?.password?.message || "Error!"}</InputError>}
          </div>
        </div>
        <div>
          <InputCheckbox type="checkbox" />
          <InputCheckboxText>Запомнить пароль</InputCheckboxText>
        </div>
        <Button type="submit">Войти</Button>
      </form>
    </FormGroup>
  );
};

export default AuthForm;
