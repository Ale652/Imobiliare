import { MainContainer, CardSaleLink, Image, Type } from "./styles";

const CardSale = (props) => {
    return(
        <MainContainer href={"/property-for-sale&id="+props.id}>
            <CardSaleLink>
                <Image  src={props.img}/>
                <Type>{props.type}</Type>
            </CardSaleLink>
        </MainContainer>
    )
}

export default CardSale;