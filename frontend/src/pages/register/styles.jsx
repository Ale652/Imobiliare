import { LoadingButton } from "@mui/lab";
import { Button, Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const MainContainer = styled("main")({
  height: "calc(100vh - 60px - 60px)",
  backgroundColor: "#f0f1f2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FormWrapper = styled("div")({});

export const Form = styled("form")({
  backgroundColor: "#fff",
  width: "450px",
  padding: "40px 50px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const Title = styled("h2")({
  textAlign: "center"
});

export const FieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const InputField = styled(TextField)({
  margin: "5px 0",
});

export const SubmitButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center"
});

export const LoadingSubmitButton = styled(LoadingButton)({
  backgroundColor: "#e9e9e9",
  width: "130px",
  height: "36px"
});

export const SubmitButton = styled(Button)({
  backgroundColor: "#e0e0e0",
  width: "130px",
  height: "36px",
  color: "#000",
  fontSize: "12px",
  textTransform: "uppercase",
  "&:not(:disabled):hover": {
    color: "#fff",
    backgroundColor: "#F1654D",
  },
  "&:disabled": {
    color: "#000",
    cursor: "default",
    backgroundColor: "#e9e9e9",
  },
});

export const LinkDividerWrapper = styled("div")({
});

export const LinkDivider = styled(Divider)({
  "&::before, &::after": {
    borderColor: "#bdbdbd",
  },
});

export const LoginLink = styled(Link)({
  color: "#F1654D",
  textDecoration: "none"
});
