import { MainContainer,  DetailsContainer, Image, TextZone, ButtonCustom, ButtonContainer } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_our_site&id="+props.id}>
            <DetailsContainer>
                <Image src={props.img}/>
                <TextZone>{props.description}</TextZone>
                <ButtonContainer>
                    <ButtonCustom>{props.buttonText}</ButtonCustom>
                </ButtonContainer>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardChooseOurSite;