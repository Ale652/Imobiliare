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
    padding: "2%"
});

export const Section = styled("section")({
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px"
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
    width: "70%",
    // flexWrap: "wrap",
    justifyContent: "center",
    gap: "6px",
    height: "350px",
    overflow: "hidden",
    gap: "4%"
});

export const TextZone = styled("div")({
    fontSize: "24px",
    textAlign: "center"
})
