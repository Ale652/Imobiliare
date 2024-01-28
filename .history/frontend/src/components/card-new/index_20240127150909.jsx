import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";


const CardNew = (props) => {
    var Imag = Components[props.img + "Component"];
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