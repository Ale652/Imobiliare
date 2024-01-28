import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";
import IconButton from '@mui/material/IconButton';


const CardNew = (props) => {
    var Imag = props.img;
    return (
        <MainContainer>
            <DetailsContainer>
                <IconButton>
                    <Imag />
                </IconButton>
                <TextZone>{props.type}</TextZone>
                <TextZone>{props.description}</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;