import { DetailsContainer, MainContainer, House, Apartments, Txt   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer>
            <DetailsContainer>
                <House/>
                <Txt>Apartamente</Txt>
                <Txt>Descoperă apartamente noi, moderne, parte din ansambluri cu dotări excelente.</Txt>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;