import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";

export const MainContainer = styled("main")({
  height: "calc(100vh - 60px - 60px)",
  backgroundColor: "#f0f1f2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FromWrapper = styled("div")({});

export const Form = styled("form")({
  backgroundColor: "#fff",
  width: "450px",
  // 40px -> top right bottom left toate 40px
  // 40px 0 -> top 40px right 0 px bottom 40px left 0 px deci vorbim de cum merge ceasul
  padding: "40px 50px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const Title = styled("h2")({
  textAlign: "center",
});

export const FieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const ForgotPasswordLinkWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-30px",
});

export const ForgotPasswordLink = styled(Link)({
  color: "#F1654D",
  textDecoration: "none",
});

export const SubmitButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
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

export const LinkDividerWrapper = styled("div")({});

export const LinkDivider = styled(Divider)({
  "&::before, &::after": {
    borderColor: "#bdbdbd",
  },
});

export const RegisterLink = styled(Link)({
  color: "#F1654D",
  textDecoration: "none"
});
