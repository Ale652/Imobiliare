import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Open Sans,Arial,sans-serif",
    WebkitFontSmoothing: "antialiased",
    backgroundColor: "#f2f3f4",
    padding: "3%"
});

export const Section = styled("section")({
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const Title = styled("h2")({
    margin: " 0px 0px 32px",
    color: "rgb(35, 46, 63)",
    fontWeight: 700,
    textAlign: "center",
    whiteSpace: "pre-line",
    textShadow: "none"
});

export const CardsContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // flexWrap: "wrap",
    justifyContent: "center",
    // height: "350px",
    gap: "0.5%",
    backgroundColor: "#f2f3f4",
});

export const TextZone = styled("div")({
    fontSize: "90%",
    textAlign: "center",
    fontSize: "24px"
})
