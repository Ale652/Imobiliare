
import chooseOutSite from "../../assets/files/choose_out_site.json";


import {
    Title,
    Section,
    MainContainer,
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
                <CardsContainer>
                    {
                        chooseOutSite.map(({ id, img, type, description, buttonText }) => (
                            <CardRent
                                id={id}
                                img={img}
                                type={type}
                            />
                        ))
                    }
                </CardsContainer>
            </Section>
        </MainContainer>
    )
}

export default ChooseOurSite;