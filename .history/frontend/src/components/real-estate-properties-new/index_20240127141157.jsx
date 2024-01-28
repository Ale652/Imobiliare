import CardNew from "../card-new";
import propertiesForSales from "../../assets/files/properties_for_sale.json";

import {
    Title,
    Section,
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
                <Title>Proprietati <span style={styles}>de vanzare</span></Title>
                <CardsContainer>
                    
                            <CardNew
                            />
          
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default SaleCard;