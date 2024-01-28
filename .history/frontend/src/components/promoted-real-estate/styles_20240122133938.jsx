import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});
export const Section = styled("section")({
    width: "75%",
});
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
    padding: "0px 16px",
    width: "100",
    gap: "5px"
});
export const ViewButton = styled(Button)({});
