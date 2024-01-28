import { MainContainer, RealEstateLink, Image, Type } from "./styles";

const CardRent = (props) => {
    return(
        <MainContainer href={"/property-for-sale&id="+props.id}>
            <CardSaleLink>
                <Image src={props.img}/>
                <Type>{props.type}</Type>
            </CardSaleLink>
        </MainContainer>
    )
}

export default CardRent;