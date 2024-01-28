import { styled } from "@mui/material/styles";
import EuroIcon from '@mui/icons-material/Euro';


export const MainContainer = styled("div")({
      display: "flex",
      flexDirection: "row",
})
export const RealEstateLink = styled("div")({
    position: "relative"
})
export const Image = styled("img")({
    height: "250px",
    width: "469px",
})
export const DetailsContainer = styled("div")({
    position: "absolute",
    bottom: "30px",
    left: "50px",
})
export const Price = styled("span")({
    margin: "0",
    color: "#fff",
    textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
})
export const Location = styled("span")({
    margin: "0",
    color: "#fff",
    textShadow: "1px 2px 1px rgb(0 0 0 / 60%)",
})

export const Euro = styled(EuroIcon)({

})

export const span = styled()({
    "color": rgb(34, 164, 183),
    fontWeight: "700"
})
