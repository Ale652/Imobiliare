import { MainContainer,  DetailsContainer, Image, TextZone } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_out_site&id="+props.id}>
            <DetailsContainer>
                <Image src={props.img}/>
                <TextZone>{props.description}</TextZone>
                <ButtonCustonm>{props.buttonText}</ButtonCustonm>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardChooseOurSite;