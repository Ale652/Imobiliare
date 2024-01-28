import { ButtonCustonm, Title, MainContainer, MidContainer, Description, Img } from "./styles";

const Ecosystem = (props) => {

    let styles = {
        color: `rgb(34, 164, 183)`,
    };

    return (
        <MainContainer>
            
            <MidContainer>
                <Img/>
            </MidContainer>
            <MidContainer>
                <Title>Indexul T.R.A.I. <span style={styles}>ResidenceHub</span></Title>
                <Description>ResidenceHub aduce împreună mii de proprietari, cumpărători, chiriași, agenți imobiliari și dezvoltatori. Împreună cu OLX, ai acces la cele mai multe anunțuri și cel mai mare trafic. Orice îți propui din punct de vedere imobiliar, aici poți găsi partenerii potriviți.</Description>
                <ButtonCustonm>Vreau sa vad indexul</ButtonCustonm>
            </MidContainer>
        </MainContainer>
    )
}

export default Ecosystem;