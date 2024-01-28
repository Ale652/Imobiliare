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
                <IconButton size="small">
                    <Img />
                </IconButton>
                <TextZone>{props.type}</TextZone>
                <TextZone>{props.description}</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;