import { ButtonCustonm, Title, MainContainer, MidContainer, Description } from "./styles";

const Ecosystem = (props) => {
    let styles = {
        color: `rgb(34, 164, 183)`,
    };
    
    return (
        <MainContainer>

            <MidContainer>
                <Title>Descoperă cel mai mare ecosistem imobiliar:  <span style={styles}>ResidenceHub</span></Title>
                <Description>Storia aduce împreună mii de proprietari, cumpărători, chiriași, agenți imobiliari și dezvoltatori. Împreună cu OLX, ai acces la cele mai multe anunțuri și cel mai mare trafic. Orice îți propui din punct de vedere imobiliar, aici poți găsi partenerii potriviți.</Description>
                <ButtonCustonm>Alege ce ți se potrivește!</ButtonCustonm>
            </MidContainer>
            <MidContainer>
                
            </MidContainer>

        </MainContainer>
    )
}

export default Ecosystem;