import MuiButton from "@mui/material/Button";
import { House } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const Header = styled("header")({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#464b53",
});

export const Nav = styled("nav")({
  display: "flex",
  alignItems: "center",
  width: "1200px",
  height: "60px",
  gap: "32px",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#fff",
});

export const LogoIcon = styled(House)({
  fontSize: "32px",
});

export const LogoText = styled("span")({
  fontSize: "24px",
});

export const LogoInnerText = styled("span")({
  fontSize: "24px",
  fontWeight: "700",
});

export const DropdownsContainer = styled("div")({});

export const Button = styled(MuiButton)({
  color: "#fff",
  fontSize: "14px",
});

export const ForSellButton = styled(Button)({});

export const ForRentButton = styled(Button)({});

export const ActionsContainer = styled("div")({
  marginLeft: "auto",
  display: "flex",
  gap: "16px",
});

export const MyAccountButton = styled(Button)({});

export const AddResidenceButton = styled(Button)({
  backgroundColor: "#F1654D",
  padding: "8px 32px",
  ":hover": {
    backgroundColor: "#F1654D",
    opacity: "0.8",
  },
});
