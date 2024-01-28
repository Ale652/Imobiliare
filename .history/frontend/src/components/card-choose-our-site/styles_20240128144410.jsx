
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

export const MainContainer = styled("div")({
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "80%",
    marginTop: "3%"
})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bottom: "10px",
    left: "15px",
    height: "100%",
    backgroundColor: "#f2f3f4",
})

export const TextZone = styled("div")({
    textAlign: "center",
    width: "100%",
    height: "40%",
    padding: "8%",
    fontSize: "16px",
    color: "#232e3f"
})


export const ButtonCustom = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f",
    width: "80%",
    border: "2px solid",
    backgroundColor: "#fff",
    ":hover": {
        borderColor: "#232e3f",
        border: "2px solid",
        backgroundColor: "#f2f3f4",
      },
})

export const Image = styled("img")({
    
})

export const ButtonContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
})