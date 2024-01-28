import Card from "../card";
import data from '../../assets/files/promoted_real_estate_data.json';
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
                        data.map(e => (
                            <Card
                                id={e.id}
                                price={e.price}
                                location={e.location}
                                img={e.img}
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