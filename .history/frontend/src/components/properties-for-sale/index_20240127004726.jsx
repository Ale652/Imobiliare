import CardSale from "../card-sale";
import propertiesForSales from "../../assets/files/properties_for_sale.json";

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
                <Title>Proprietati <span style={styles}>de inchiriat</span></Title>
                <CardsContainer>
                    {
                        propertiesForSales.map(({ id, img, type }) => (
                            <CardSale
                                id={id}
                                img={img}
                                type={type}
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