import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

export const MainContainer = styled("a")({
    width: "43%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column"
})

export const MidContainer = styled("div")({
    height: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12%"
})

export const Title = styled("h2")({
    margin: " 0px 0px 32px",
    color: "rgb(35, 46, 63)",
    fontWeight: 700,
    textAlign: "center",
    whiteSpace: "pre-line",
    textShadow: "none"
});

export const Description = styled("div")({})


export const ButtonCustonm = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f",
    width: "80%",
    border: "2px solid",
    ":hover": {
        borderColor: "#232e3f",
        border: "2px solid",
        backgroundColor: "#f2f3f4",
      },
})