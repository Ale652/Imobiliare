import Card from "../card";
import { CardsContainer, MainContainer, Section, Title, ViewButton } from "./styles";
import data from './promoted_real_estate_data.json';
import gatsbyIconImage from "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImthOTQzcHVpMGtxbDEtQVJPIiwidyI6W3siZm4iOiIzdzU2NnhnanB5MnAxLUFSTyIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.YgBWkxlcz_Xy-jNRsor6eBUVEMSpjbBjcqNYXbJ--tA/image;s=655x491;q=80"


function PromotedRealEstate() {
    return (
        <MainContainer>
            <Section>
                <Title>Anunțuri imobiliare promovate</Title>
                <CardsContainer>
                    {
                        data.map(e => (
                            <Card 
                                key = {e.id}
                                price = {e.price}
                                location = {e.location}
                                img = {gatsbyIconImage}
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