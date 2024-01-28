import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from "@mui/material/styles";

export const MainContainer = styled("a")({
    width: "43%",
    backgroundColor: "#fff"
})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    bottom: "10px",
    left: "15px",
    fontSize: "20px"
})

export function House(){
    return(
        <HouseIcon/>
    )
}

export const Apartments(){
    return(
        <LocationCityIcon/>
    )
}

export const TextZone = styled("div")({
    textAlign: "center"
})