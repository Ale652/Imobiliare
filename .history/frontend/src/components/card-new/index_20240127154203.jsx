import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";
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
           
                <Img/>        
                <TextZone>{props.type}</TextZone>
                <TextZone>{props.description}</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;