import { ButtonCustonm, Title, MainContainer, MidContainer, Description, Img } from "./styles";

const StandardOfLiving = (props) => {

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
                <Description>
                    Află care este nivelul de trai din cartierele din România. Indexul prezintă date obiective și va include și date de percepție, 
                    de la vecini care vor să te ajute. Acum T.R.A.I. înseamnă:
                    <br><span style={styles}>T </span>– nivelul de trafic </br>
                    <span style={styles}>R</span> – densitatea reperelor (parcuri, restaurante etc.) <br></br>
                    <span style={styles}>A</span> – calitatea aerului <br></br>
                    <span style={styles}>I</span> – costul pe metru pătrat al imobiliarelor<br></br>

                </Description>
                <ButtonCustonm>Vreau sa vad indexul</ButtonCustonm>
            </MidContainer>
        </MainContainer>
    )
}

export default StandardOfLiving;