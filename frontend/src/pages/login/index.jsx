import { InputField } from "../register/styles";
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

function Login() {
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
  };

  const handleChangePassword = (event) => {
    console.log(event.target.value);
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
              // error={errors.lastNameErrorText.length !== 0}
              onChange={handleChangeEmail}
              label="Email"
              // helperText={errors.lastNameErrorText}
            />

            <InputField
              variant="standard"
              name="password"
              type="password"
              // error={errors.lastNameErrorText.length !== 0}
              onChange={handleChangePassword}
              label="Parola"
              // helperText={errors.lastNameErrorText}
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
