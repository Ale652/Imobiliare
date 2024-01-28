import { MainContainer, CardSaleLink, Image, Type } from "./styles";

const CardRent = (props) => {
    return(
        <MainContainer href={"/property-for-sale&id="+props.id}>
            <RealEstateLink>
                <Image src={props.img}/>
                <Type>{props.type}</Type>
            </RealEstateLink>
        </MainContainer>
    )
}

export default CardRent;