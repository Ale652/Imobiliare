import { DetailsContainer, MainContainer, House, Apartments, TextZone   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer>
            <DetailsContainer>
                <House/>
                <TextZone>Apartamente</TextZone>
                <TextZone>Descoperă apartamente noi, moderne, parte din ansambluri cu dotări excelente.</TextZone>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;