import { InputField } from "../register/styles";
import { useState } from "react";
import {
  FieldsContainer,
  ForgotPasswordLink,
  ForgotPasswordLinkWrapper,
  Form,
  FromWrapper,
  LinkDivider,
  LinkDividerWrapper,
  MainContainer,
  RegisterLink,
  SubmitButton,
  SubmitButtonWrapper,
  Title,
} from "./styles";
import { emailValidation, passwordValidation, confirmPasswordValidation } from "../../utils/validations-utils";


function Login() {

  const formData = {
    email: "",
    password: ""
  }

  const[errors , setErrors] = useState({
    emailErrorText: "",
    passwordErrorText: ""
  })

  const handleChangeEmail = (event) => {
    setErrors((currentErrors) => ({
      ...currentErrors,
      emailErrorText: emailValidation(event.target.value),
    }));
  };

  const handleChangePassword = (event) => {
    setErrors((currentErrors) => ({
      ...currentErrors,
      passwordErrorText: passwordValidation(event.target.value),
    }));
  };

  return (
    <MainContainer>
      <FromWrapper>
        <Form>
          <Title>Autentificare</Title>
          <FieldsContainer>
            <InputField
              variant="standard"
              name="email"
              type="email"
              error={errors.emailErrorText.length !== 0}
              onChange={handleChangeEmail}
              label="Email"
              helperText={errors.emailErrorText}
            />

            <InputField
              variant="standard"
              name="password"
              type="password"
              error={errors.passwordErrorText.length !== 0}
              onChange={handleChangePassword}
              label="Parola"
              helperText={errors.passwordErrorText}
            />
          </FieldsContainer>
          <ForgotPasswordLinkWrapper>
            <ForgotPasswordLink to="/forgot-password">Ai uitat parola?</ForgotPasswordLink>
          </ForgotPasswordLinkWrapper>
          <SubmitButtonWrapper>
            <SubmitButton type="submit">Autentificare</SubmitButton>
          </SubmitButtonWrapper>
          <LinkDividerWrapper>
            <LinkDivider>
              <RegisterLink to="/register">Nu ai cont?</RegisterLink>
            </LinkDivider>
          </LinkDividerWrapper>
        </Form>
      </FromWrapper>
    </MainContainer>
  );
}

export default Login;
