import { ButtonCustonm, Title, MainContainer, MidContainer, MidContainerLarger, Description, Img, Section, Sun, Heart } from "./styles";

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
                        <Sun/>
                        Găsește oferta de creditare potrivită pentru tine
                        Folosește calculatorul de credit KIWI Finance și află de la specialiști ce ofertă ți se potrivește și cum crești șansele de aprobare.
                    </Description>
                    <Description>
                        <Heart/>
                        Scapă de drumuri inutile și formalități bancare de neînțeles și lucrează gratuit cu cel mai mare broker de credite din România.
                    </Description>
                    <ButtonCustonm>Vreau credit</ButtonCustonm>
                </MidContainer>
            </Section>
            <MidContainerLarger>
                <Img/>
            </MidContainerLarger>
                    
               
        </MainContainer>
    )
}

export default CreditCalculator;