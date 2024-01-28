import { styled } from "@mui/material/styles";
import EuroIcon from '@mui/icons-material/Euro';


export const MainContainer = styled("div")({
    //   display: "flex",
    //   flexDirection: "row",
})
export const RealEstateLink = styled("div")({
    position: "relative"
})
export const Image = styled("img")({
    height: "250px",
    width: "380px",
})
export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "10px",
    left: "15px",
})
export const Price = styled("span")({
    margin: "0",
    textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
    fontWeight: "bold",
})
    
export const PriceContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    color: "#fff",
})

export const Location = styled("span")({
    margin: "0",
    color: "#fff",
    textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
    fontWeight: "bold"
})

export const Euro = styled(EuroIcon)({
    fontSize: "17px",
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    border: 0
    
})


