
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';


export const MainContainer = styled("div")({
    width: "43%",
    height: "100%",
    backgroundColor: "#fff"
})


export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bottom: "10px",
    left: "15px",
    fontSize: "20px",
    height: "100%",
    backgroundColor: "#f2f3f4",
})

export const TextZone = styled("div")({
    textAlign: "center",
    width: "100%",
    padding: "6%"
})

export const ButtonCustom = styled(Button)({
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

export const Image = styled("img")({

})