import CardNew from "../card-new";

import {
    Title,
    Section,
    MainContainer,
    CardsContainer,
} from "./styles";

function NewCard(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Proprietati <span style={styles}>de vanzare</span></Title>
                <CardsContainer>
                    
                            <CardNew
                            />
          
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default NewCard;