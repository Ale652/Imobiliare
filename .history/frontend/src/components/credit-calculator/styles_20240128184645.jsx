import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import backgroundImage from '../../assets/images/mortgageCalculatorImage.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export const MainContainer = styled("div")({
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f2f3f4",
    gap: "5%"
})

export const Section = styled("section")({
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  
});

export const MidContainer = styled("div")({
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export const MidContainerLarger = styled("div")({
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    overflow: "hidden", 
})

export const Title = styled("h2")({
    margin: " 0px 0px 32px",
    color: "rgb(35, 46, 63)",
    textAlign: "center",
    whiteSpace: "pre-line",
    textShadow: "none",
    fontSize: "32px"
});

export const Description = styled("div")({
    fontSize: "24px",
    fontWeight: "bold"
})


export const ButtonCustonm = styled(Button)({
    color: "#232e3f",
    borderColor: "#232e3f",
    width: "55%",
    marginTop: "10%",
    border: "2px solid",
    backgroundColor: "#fff",
    marginBottom: "5%",
    ":hover": {
        borderColor: "#232e3f",
        border: "2px solid",
        backgroundColor: "#f2f3f4",
      },
})

export const Img = styled("section")({
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "120%",
    height: "120%",

})


export function Sun(){
    return(
        <div>     
            <Brightness5Icon  style={{ fontSize: '30px' }}/>
        </div>
        
    )
}