import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

const styles = {

    largeIcon: {
      width: "40%",
      height: 190,
    },
  };

export const MainContainer = styled("a")({
    width: "43%",
    height: "100%",
    backgroundColor: "#fff"
})

export const MidContainer = styled("div")({
    height: "50%"
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
            {/* <IconButton iconStyle={styles.largeIcon}> */}
                <HouseIcon  style={{ fontSize: '100px' }}/>
            {/* </IconButton> */}
        </div>
        
    )
}

export function Apartments(){
    return(
        <div>
            {/* <IconButton iconStyle={styles.largeIcon} > */}
                <LocationCityIcon style={{ fontSize: '100px' }}/>
            {/* </IconButton> */}
        </div>
        
    )
}

export const TextZone = styled("div")({
    textAlign: "center"
})

export const ButtonCustonm = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f"
})