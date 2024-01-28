import { DetailsContainer, MainContainer, House, Apartments, TextZone,MidContainer, ButtonCustonm   } from "./styles";


const CardNew = (props) => {
    var Imag = props.img

    const componentMap = {
        'House': House,
        'Apartments': Apartments,
      };
      
      const Img = componentMap[Imag]

    return (
        <MainContainer>
            <DetailsContainer>
                <MidContainer>
                    <Img/>        
                    <TextZone>{props.type}</TextZone>
                </MidContainer>
                <MidContainer>
                    <TextZone>{props.description}</TextZone>
                    <ButtonCustonm variant="outlined">Gaseste {props.type} noi</ButtonCustonm> 
                </MidContainer>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardNew;