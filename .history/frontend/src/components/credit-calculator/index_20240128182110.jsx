import { ButtonCustonm, Title, MainContainer, MidContainer, MidContainerLarger, Description, Img, Section } from "./styles";

const CreditCalculator = (props) => {

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <MidContainer>
                    <Title>Calculator <span style={styles}>de credite</span></Title>
                    <Description>
                        Folosește calculatorul de credit KIWI Finance și află de la specialiști ce ofertă ți se potrivește și cum crești șansele de aprobare.
                    </Description>
                    <Description>
                        Scapă de drumuri inutile și formalități bancare de neînțeles și lucrează gratuit cu cel mai mare broker de credite din România.
                    </Description>
                    <ButtonCustonm>Vreau credit</ButtonCustonm>
                </MidContainer>
                
            </Section>
            <MidContainer>
                    <Img/>
                </MidContainer>
        </MainContainer>
    )
}

export default CreditCalculator;