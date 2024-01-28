import { MainContainer, Type } from "./styles";

const CardSale = (props) => {
    return(
        <MainContainer href={"/property-for-sale&id="+props.id}>
            <RealEstateLink>
            <Image  src={props.img}/>
            </RealEstateLink>
        </MainContainer>
    )
}

export default CardSale;