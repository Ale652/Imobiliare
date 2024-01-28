import { MainContainer,  DetailsContainer, Image } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_out_site&id="+props.id}>
            <DetailsContainer>
                <Image src={props.img}/>
            </DetailsContainer>
        </MainContainer>
    )
}

export default CardChooseOurSite;