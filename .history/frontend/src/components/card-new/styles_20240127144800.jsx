import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from "@mui/material/styles";

export const MainContainer = styled("a")({
    width: "50%"
})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    bottom: "10px",
    left: "15px",
    fontSize: "20px"
})

export const House = styled(HouseIcon)({
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    border: 0
})

export const Apartments = styled(LocationCityIcon)({
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    border: 0
})

export const TextZone = styled("div")({

})