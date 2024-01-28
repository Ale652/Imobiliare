import { MainContainer,  DetailsContainer } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_out_site&id="+props.id}>
            <DetailsContainer>

            </DetailsContainer>
        </MainContainer>
    )
}

export default CardChooseOurSite;