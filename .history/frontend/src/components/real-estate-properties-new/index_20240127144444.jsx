import CardNew from "../card-new";
import realEstatePropertiesNew from "../../assets/files/real-estate-properties-new.json";


import {
    Title,
    Section,
    MainContainer,
    CardsContainer,
    TextZone,
} from "./styles";

function RealEstatePropertiesNew(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Proprietati <span style={styles}>imobiliare noi</span></Title>
                <TextZone>Fie că îți cumperi o locuință pentru prima dată, fie că ești un investitor cu experiență, ne propunem să fim principala ta destinație când cauți proprietăți noi, de calitate.</TextZone>
                <CardsContainer>
                    {
                        realEstatePropertiesNew.map(({ id, img, description, type }) => (
                            <CardNew
                                id={id}
                                img={img}
                                description={description}
                                type={type}
                            />
                        ))
                    }
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default RealEstatePropertiesNew;