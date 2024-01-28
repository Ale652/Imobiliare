import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";

const styles = {

    largeIcon: {
      width: "40%",
      height: 190,
    },
  };

export const MainContainer = styled("a")({
    width: "43%",
    backgroundColor: "#fff"
})

export const DetailsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bottom: "10px",
    left: "15px",
    fontSize: "20px"
})

export function House(){
    return(
        <div>
            <IconButton iconStyle={styles.largeIcon}>
                <HouseIcon  />
            </IconButton>
        </div>
        
    )
}

export function Apartments(){
    return(
        <div>
            <IconButton iconStyle={styles.largeIcon} >
                <LocationCityIcon />
            </IconButton>
        </div>
        
    )
}

export const TextZone = styled("div")({
    textAlign: "center"
})