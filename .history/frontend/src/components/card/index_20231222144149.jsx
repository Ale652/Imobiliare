import { DetailsContainer, Image, MainContainer, Price, RealEstateLink, Location } from "./styles";

function Card() {
    // MainContainer
    // inauntru la MainContainer punem RealEstateLink
    // inauntru la RealEstateLink punem Image si DetailsContainer
    // inautnru la DetailsContainer punem Price si Location
    return (
        <MainContainer>
            <RealEstateLink>
                <Image></Image>
                <DetailsContainer>
                    <Price>64537</Price>
                    <Location>Bucuresti (judet), Militari</Location>
                </DetailsContainer>
            </RealEstateLink>
        </MainContainer>
    )
}

export default Card;