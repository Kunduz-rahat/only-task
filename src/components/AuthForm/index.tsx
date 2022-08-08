import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Input, InputCheckbox, InputCheckboxText, LabelText } from "./styles";

type AuthFormTypes = {
  login: string;
  password: string;
};

const AuthForm: React.FC = (props) => {
  const { control, handleSubmit } = useForm<AuthFormTypes>();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  return (
    <FormGroup>
      <form onSubmit={onSubmit}>
        <div>
          <LabelText>
            <label htmlFor="login">Логин</label>
          </LabelText>

          <div>
            <Input id="login" name="login" type="text" />
            
          </div>
        </div>
        <div>
          <LabelText>
            <label htmlFor="password">Пароль</label>
          </LabelText>
          <div>
            <Input id="password" name="password" type="password" />
                   </div>
        </div>
		  <div>
		  <InputCheckbox type='checkbox'/>
		  <InputCheckboxText>Запомнить пароль</InputCheckboxText>
		  </div>
		  
        <Button type="submit">Войти</Button>
      </form>
    </FormGroup>
  );
};

export default AuthForm;
