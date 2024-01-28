import backgroundImage from "../../../assets/images/background.jpg";

import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  height: "500px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
});

export const Title = styled("h1")({
  margin: "0",
  color: "#fff",
  textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
});

export const Subtitle = styled("h2")({
  margin: "0",
  color: "#fff",
  textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
});

export const InnerContainer = styled("div")({
  width: "900px",
  display: "flex",
  flexDirection: "column",
});

export const Tab = styled("div")({
  backgroundColor: "#fff",
  width: "max-content",
  padding: "8px 24px",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
  color: "#404041",
  fontSize: "14px",
  borderRadius: "2px 2px 0 0",
});


export const TitlesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});