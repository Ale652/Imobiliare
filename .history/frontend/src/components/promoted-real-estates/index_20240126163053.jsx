import Card from "../card";
import promotedRealEstates from '../../assets/files/promoted_real_estates.json';
import { CardsContainer, MainContainer, Section, Title, ViewButton, } from "./styles";

function PromotedRealEstate() {
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

export default PromotedRealEstate;