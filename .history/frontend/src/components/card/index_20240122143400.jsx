import { DetailsContainer, Image, MainContainer, Price, RealEstateLink, Location, Euro } from "./styles";


const Card = (props) => {
    return (
        <MainContainer>
            <RealEstateLink>
            <Image  src={props.img}/>
            <DetailsContainer>
                <PriceContainer>
                <Price>{props.price} <Euro/></Price>
                </PriceContainer>
                <Location>{props.location}</Location>     
            </DetailsContainer>
            </RealEstateLink>
        </MainContainer>
    )
}

export default Card;