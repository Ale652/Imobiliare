import { DetailsContainer, MainContainer, House, Apartments, TextZone,MidContainer, ButtonCustonm   } from "./styles";
import IconButton from '@mui/material/IconButton';


const CardNew = (props) => {
    var Imag = props.img

    const componentMap = {
        'House': House,
        'Apartments': Apartments,
      };
      
      const Img = componentMap[Imag]

    return (
        <MainContainer>
            <DetailsContainer>
                <MidContainer>
                    <Img/>        
                    <TextZone>{props.type}</TextZone>
                </MidContainer>
                <MidContainer>
                    <TextZone>{props.description}</TextZone> 
                </MidContainer>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;