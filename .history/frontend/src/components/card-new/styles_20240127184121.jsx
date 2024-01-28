import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';


export const MainContainer = styled("a")({
    width: "43%",
    height: "100%",
    backgroundColor: "#fff"
})

export const MidContainer = styled("div")({
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12%"
})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bottom: "10px",
    left: "15px",
    fontSize: "20px",
    height: "100%"
})

export function House(){
    return(
        <div>     
            <HouseIcon  style={{ fontSize: '100px' }}/>
        </div>
        
    )
}

export function Apartments(){
    return(
        <div>
            <LocationCityIcon style={{ fontSize: '100px' }}/>
        </div>
        
    )
}

export const TextZone = styled("div")({
    textAlign: "center"
})

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