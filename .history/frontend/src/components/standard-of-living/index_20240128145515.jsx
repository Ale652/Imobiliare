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
                <Description>
                    Află care este nivelul de trai din cartierele din România. Indexul prezintă date obiective și va include și date de percepție, 
                    de la vecini care vor să te ajute. Acum T.R.A.I. înseamnă:</br>
                    T – nivelul de trafic 
                    R – densitatea reperelor (parcuri, restaurante etc.) 
                    A – calitatea aerului 
                    I – costul pe metru pătrat al imobiliarelor

                </Description>
                <ButtonCustonm>Vreau sa vad indexul</ButtonCustonm>
            </MidContainer>
        </MainContainer>
    )
}

export default Ecosystem;