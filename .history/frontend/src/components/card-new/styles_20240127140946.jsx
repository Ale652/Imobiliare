import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from "@mui/material/styles";

export const MainContainer = styled("a")({

})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
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

export const Text = styled("div")({})