import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer>
            <DetailsContainer>
                <House/>
                <TextZone>{props.type}</TextZone>
                <TextZone>{props.description}</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;