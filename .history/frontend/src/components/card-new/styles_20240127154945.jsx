import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import IconButton from 'material-ui/IconButton';
import { styled } from "@mui/material/styles";

const styles = {

    largeIcon: {
      width: 190,
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
        <span>
            <HouseIcon iconStyle={styles.largeIcon} />
        </span>
        
    )
}

export function Apartments(){
    return(
        <IconButton iconStyle={styles.largeIcon} >
            <LocationCityIcon />
        </IconButton>
        
    )
}

export const TextZone = styled("div")({
    textAlign: "center"
})