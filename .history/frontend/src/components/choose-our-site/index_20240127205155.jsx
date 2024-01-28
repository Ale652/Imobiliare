import CardNew from "../card-new";
import realEstatePropertiesNew from "../../assets/files/real-estate-properties-new.json";


import {
    Title,
    Section,
    MainContainer,
    CardsContainer,
    TextZone,
} from "./styles";

function ChooseOurSite(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Alege <span style={styles}>Storia</span></Title>
                <TextZone>Fie că vrei să cumperi, să închiriezi sau să vinzi o locuință, pe Storia găsești toate instrumentele necesare pentru a lua deciziile corecte.</TextZone>
   
            </Section>
        </MainContainer>
    )
}

export default ChooseOurSite;