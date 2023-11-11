import MuiSelect from "@mui/material/Select";
import MuiButton from "@mui/material/Button";
import MuiDivider from "@mui/material/Divider";
import MuiTextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import { EuroSymbol } from "@mui/icons-material";

export const MainContainer = styled("div")({
  padding: "16px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const InnerContainer = styled("div")({});

export const Select = styled(MuiSelect)({
  fontSize: "14px",
  width: "150px",
  height: "40px",
  borderRadius: "0",
});

export const ResidenceSelect = styled(Select)({});

export const ContractSelect = styled(Select)({});

export const DistanceSelect = styled(Select)({
  width: "100px",
});

export const Input = styled(MuiTextField)({
  fontSize: "14px",
  width: "200px",
  "& fieldset": {
    borderRadius: "0",
  },
});

export const LocationInput = styled(Input)({
  width: "250px",
});

export const HyphenWrapper = styled("div")({});

export const Divider = styled(MuiDivider)({});

export const Button = styled(MuiButton)({
  backgroundColor: "#F1654D",
  color: "#fff",
  width: "180px",
  ":hover": {
    backgroundColor: "#F1654D",
    opacity: ".8",
  },
});

export const EuroSymbolIcon = styled(EuroSymbol)({
  fontSize: "16px",
});

export const Pre = styled("pre")({
  fontSize: "16px",
});

export const Sup = styled("sup")({
  fontSize: "13px",
});
