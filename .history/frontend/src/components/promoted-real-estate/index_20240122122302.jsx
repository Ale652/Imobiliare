import Card from "../card";
import { CardsContainer, MainContainer, Section, Title, ViewButton, } from "./styles";
import data from './promoted_real_estate_data.json';

function PromotedRealEstate() {
    return (
        <MainContainer>
            <Section>
                <Title>Anunțuri <span color="rgb(34, 164, 183)">imobiliare promovate</span></Title>
                <CardsContainer>
                    {
                        data.map(e => (
                            <Card 
                                key = {e.id}
                                price = {e.price}
                                location = {e.location}
                                img = {e.img}
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