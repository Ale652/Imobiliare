import Card from "../card";
import { CardsContainer, MainContainer, Section, Title, ViewButton } from "./styles";

function PromotedRealEstate() {
    return (
        <MainContainer>
            <Section>
                <Title>Anunțuri imobiliare promovate</Title>
                <CardsContainer>
                    <Card />
                </CardsContainer>
                <ViewButton>Vezi toate anunțurile</ViewButton>
            </Section>
        </MainContainer>
    )
}

export default PromotedRealEstate;