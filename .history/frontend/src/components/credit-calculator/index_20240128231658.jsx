import { ButtonCustonm, Title, MainContainer, MidContainer, MidContainerLarger, Description, Img, Section, Sun, Heart, 
    DescriptionContainer, DescriptionTextContainer, DesciptionTitle, DescriptionsContainer } from "./styles";

const CreditCalculator = (props) => {

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <MidContainer>
                    <Title>Calculator <span style={styles}>de credite</span></Title>
                    <DescriptionsContainer>
                        <DescriptionContainer>
                            <Sun/>
                            <DescriptionTextContainer>
                                <DesciptionTitle> Găsește oferta de creditare potrivită pentru tine</DesciptionTitle>
                                
                                <Description>    
                                    Folosește calculatorul de credit KIWI Finance și află de la specialiști ce ofertă ți se potrivește și cum crești șansele de aprobare.
                                </Description>
                            </DescriptionTextContainer>    
                        </DescriptionContainer>
                        <DescriptionContainer>
                            <Heart/>
                            <DescriptionTextContainer>
                                <DesciptionTitle> Găsește oferta de creditare potrivită pentru tine</DesciptionTitle>
                                <Description>
                                    Scapă de drumuri inutile și formalități bancare de neînțeles și lucrează gratuit cu cel mai mare broker de credite din România.
                                </Description>
                            </DescriptionTextContainer>
                        </DescriptionContainer>
                    </DescriptionsContainer>
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