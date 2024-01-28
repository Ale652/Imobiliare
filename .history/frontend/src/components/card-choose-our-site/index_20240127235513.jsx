import { MainContainer, CardSaleLink, Image, Type } from "./styles";

const CardChooseOurSite = (props) => {
    return(
        <MainContainer href={"/choose_out_site&id="+props.id}>
            <CardSaleLink>
                <Image src={props.img}/>
                <Type>{props.type}</Type>
            </CardSaleLink>
        </MainContainer>
    )
}

export default CardChooseOurSite;