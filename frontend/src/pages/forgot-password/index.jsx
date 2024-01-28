import { useState } from "react";
import {
    FieldsContainer,
    FormWrapper,
    MainContainer,
    Title,
    InputField,
    LinkDividerWrapper,
    LinkDivider,
    LoginLink,
    Form,
    RegisterLink,
    SubmitButtonWrapper,
    SubmitButton
  } from "./styles";
import { emailValidation } from "../../utils/validations-utils";


function ForgotPassword() {

    const [emailErrorText, setEmailErrorText] = useState("");

    const handleChangeEmail = (event) => {
        console.log(event.target.value);
        setEmailErrorText(emailValidation(event.target.value));
      };
    
    return (
            <MainContainer>
                <FormWrapper>
                    <Form>
                        <Title>Ai uitat parola ?</Title>
                        <FieldsContainer>
                            <InputField
                                variant="standard"
                                name="email"
                                type="email"
                                error={emailErrorText.length !== 0}
                                onChange={handleChangeEmail}
                                label="Email"
                                helperText={emailErrorText}
                            />
                        </FieldsContainer>
                        <SubmitButtonWrapper>
                            <SubmitButton type="submit">Resetare parola</SubmitButton>
                        </SubmitButtonWrapper>
                        <LinkDividerWrapper>
                            <LinkDivider>
                                <LoginLink to="/login">Stii parola ?</LoginLink>
                            </LinkDivider>
                    </LinkDividerWrapper>
                    </Form>
                </FormWrapper>
            </MainContainer>
    );
}

export default ForgotPassword;