import { DetailsContainer, Image, MainContainer, House, Apartments   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer href={"/anunt-imobiliar&id="+props.id}>
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