import CardRent from "../card-rent";
import propertiesForRent from "../../assets/files/properties_for_rent.json";

import {
    Title,
    Section,
    ViewButton,
    MainContainer,
    CardsContainer,
} from "./styles";
import CardRent from "../card-rent";

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
                        propertiesForRent.map(({ id, img, type }) => (
                            <CardRent
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