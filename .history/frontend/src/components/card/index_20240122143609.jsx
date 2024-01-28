import { DetailsContainer, Image, MainContainer, Price, RealEstateLink, Location, Euro, PriceContainer } from "./styles";


const Card = (props) => {
    return (
        <MainContainer>
            <RealEstateLink>
            <Image  src={props.img}/>
            <DetailsContainer>
                <PriceContainer>
                    <Price>{props.price}</Price>
                    <Euro/>
                </PriceContainer>
                <Location>{props.location}</Location>     
            </DetailsContainer>
            </RealEstateLink>
        </MainContainer>
    )
}

export default Card;