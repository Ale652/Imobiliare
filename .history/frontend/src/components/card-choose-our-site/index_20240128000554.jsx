import { MainContainer,  DetailsContainer, Image, TextZone, ButtonCustom } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_out_site&id="+props.id}>
            <DetailsContainer>
                <Image src={props.img}/>
                <TextZone>{props.description}</TextZone>
                <ButtonCustom>{props.buttonText}</ButtonCustom>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardChooseOurSite;