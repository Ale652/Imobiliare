import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
});
export const Section = styled("section")({});
export const Title = styled("h2")({
    margin:" 0px 0px 32px",
    color: "rgb(35, 46, 63)",
    fontWeight: 700,
    textAlign: "center",
    whiteSpace: "pre-line",
    textShadow: "none"
});
export const CardsContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: "0px 16px"
});
export const ViewButton = styled(Button)({});

// export const span = styled("h2")({
//     color: "rgb(34, 164, 183)",
//     fontWeight: "700"
// })