import { ButtonCustonm, Title, MainContainer, MidContainer, Description, Img, Section } from "./styles";

const Ecosystem = (props) => {

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            <Section>
                <MidContainer>
                    <Title>Descoperă cel mai mare ecosistem imobiliar:  <span style={styles}>ResidenceHub</span></Title>
                    <Description>ResidenceHub aduce împreună mii de proprietari, cumpărători, chiriași, agenți imobiliari și dezvoltatori. Împreună cu OLX, ai acces la cele mai multe anunțuri și cel mai mare trafic. Orice îți propui din punct de vedere imobiliar, aici poți găsi partenerii potriviți.</Description>
                    <ButtonCustonm>Alege ce ți se potrivește!</ButtonCustonm>
                </MidContainer>
                <MidContainer>
                    <Img/>
                </MidContainer>
            </Section>
        </MainContainer>
    )
}

export default Ecosystem;