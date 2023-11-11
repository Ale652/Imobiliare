import { useState } from "react";
import {
  FieldsContainer,
  Form,
  FormWrapper,
  InputField,
  LinkDivider,
  LinkDividerWrapper,
  LoadingSubmitButton,
  LoginLink,
  MainContainer,
  SubmitButton,
  SubmitButtonWrapper,
  Title,
} from "./styles";
import { emailValidation, passwordValidation, confirmPasswordValidation } from "./utils";

function Register() {
  const isLoading = false;
  const isSubmitButtonDisabled = false;

  const formData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [errors, setErrors] = useState({
    emailErrorText: "",
    passwordErrorText: "",
    confirmPasswordErrorText: "",
  });

  console.log(errors);

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


  const handleChangeConfirmPassword = (event) => {
    setErrors((currentErrors) => ({
      ...currentErrors,
      confirmPasswordErrorText: confirmPasswordValidation(event.target.value),
    }));
  };

  return (
    <MainContainer>
      <FormWrapper>
        <Form>
          <Title>Inregistrare</Title>
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
            <InputField
              variant="standard"
              name="confirmPasswordd"
              type="password"
              error={errors.confirmPasswordErrorText.length !== 0}
              onChange={handleChangeConfirmPassword}
              label="Confirmare parola"
              helperText={errors.confirmPasswordErrorText}
            />
          </FieldsContainer>
          <SubmitButtonWrapper>
            {isLoading ? (
              <LoadingSubmitButton
                loading
                loadingPosition="center"
                variant="outlined"
              />
            ) : (
              <SubmitButton type="submit" disabled={isSubmitButtonDisabled}>
                Inregistrare
              </SubmitButton>
            )}
          </SubmitButtonWrapper>
          <LinkDividerWrapper>
            <LinkDivider>
              <LoginLink to="/login">Ai deja cont?</LoginLink>
            </LinkDivider>
          </LinkDividerWrapper>
        </Form>
      </FormWrapper>
    </MainContainer>
  );
}

export default Register;
