import { DetailsContainer, Image, MainContainer, House, Apartments   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer>
            <DetailsContainer>
                <House/>
                <Text>Apartamente</Text>
                <Text>Descoperă apartamente noi, moderne, parte din ansambluri cu dotări excelente.</Text>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;