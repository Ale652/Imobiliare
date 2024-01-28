import { DetailsContainer, Image, MainContainer, House, Apartments   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer href={"/anunt-imobiliar&id="+props.id}>
            <DetailsContainer>
                <House/>
                <Text>Apartamente</Text>
                <Text>Descoperă apartamente noi, moderne, parte din ansambluri cu dotări excelente.</Text>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default Card;