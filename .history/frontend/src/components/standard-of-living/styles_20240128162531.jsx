import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import backgroundImage from '../../assets/images/residenceHub-analytics-mobile.jpg';

export const MainContainer = styled("div")({
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "9%"
})

export const Section = styled("section")({
    width: "75%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "8%"
});

export const MidContainer = styled("div")({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    // justifyContent: "space-between"
    // gap: "5%",
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
    fontSize: "24px",
    fontWeight: "bold"
})


export const ButtonCustonm = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f",
    width: "55%",
    marginTop : "15%",
    border: "2px solid",
    ":hover": {
        borderColor: "#232e3f",
        border: "2px solid",
        backgroundColor: "#f2f3f4",
      },
})

export const Img = styled("section")({
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    widht: "100%",
    height: "100%"
})
