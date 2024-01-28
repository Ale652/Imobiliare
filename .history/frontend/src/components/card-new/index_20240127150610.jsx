import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";


const CardNew = (props) => {
    var Image = Components[props.img + "Component"];
    return (
        <MainContainer>
            <DetailsContainer>
                <Image/>
                <TextZone>{props.type}</TextZone>
                <TextZone>{props.description}</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;