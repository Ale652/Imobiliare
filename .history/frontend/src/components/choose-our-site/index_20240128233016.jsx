
import chooseOutSite from "../../assets/files/choose_our_site.json";
import CardChooseOurSite from "../card-choose-our-site";


import {
    Title,
    Section,
    MainContainer,
    TextZone,
    CardsContainer
} from "./styles";

function ChooseOurSite(){

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <Title>Alege <span style={styles}>ResidenceHub</span></Title>
                <TextZone>Fie că vrei să cumperi, să închiriezi sau să vinzi o locuință, pe ResidenceHub găsești toate instrumentele necesare pentru a lua deciziile corecte.</TextZone>
                <CardsContainer>
                    {
                        chooseOutSite.map(({ id, img, type, description, buttonText }) => (
                            <CardChooseOurSite
                                id={id}
                                img={img}
                                type={type}
                                description={description}
                                buttonText={buttonText}
                            />
                        ))
                    }
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default ChooseOurSite;