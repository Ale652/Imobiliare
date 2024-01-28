import { MainContainer } from "./styles";
import {
    Title,
    Section,
    ViewButton,
    MainContainer,
    CardsContainer,
} from "./styles";

function SaleCard(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Anunțuri <span style={styles}>imobiliare promovate</span></Title>
                <CardsContainer>
                    {
                        promotedRealEstates.map(({ id, img, price, location }) => (
                            <Card
                                id={id}
                                price={price}
                                location={location}
                                img={img}
                            />
                        ))
                    }
                </CardsContainer>
                <ViewButton>Vezi toate anunțurile</ViewButton>
            </Section>
        </MainContainer>
    )
}

export default SaleCard;