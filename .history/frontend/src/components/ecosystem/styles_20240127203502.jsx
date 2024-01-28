import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import backgroundImage from '../../assets/images/aboutUsHeart.jpg';

export const MainContainer = styled("div")({
    width: "58%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
})

export const MidContainer = styled("div")({
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "30px"
})

export const Title = styled("h2")({
    margin: " 0px 0px 32px",
    color: "rgb(35, 46, 63)",
    textAlign: "center",
    whiteSpace: "pre-line",
    textShadow: "none",
    fontSize: "32px"
});

export const Description = styled("div")({
    fontSize: "24px"
})


export const ButtonCustonm = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f",
    width: "55%",
    border: "2px solid",
    ":hover": {
        borderColor: "#232e3f",
        border: "2px solid",
        backgroundColor: "#f2f3f4",
      },
})

export const Img = styled("section")({
    backgroundImage: `url(${backgroundImage})`,
    widht: "70px",
    height: "550px"
})