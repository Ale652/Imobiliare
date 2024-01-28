import CardNew from "../card-new";

import {
    Title,
    Section,
    MainContainer,
    CardsContainer,
} from "./styles";

function RealEstatePropertiesNew(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Proprietati <span style={styles}>imobiliare noi</span></Title>
                <CardsContainer>
                    
                            <CardNew
                            />
          
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default RealEstatePropertiesNew;