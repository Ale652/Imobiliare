import { DetailsContainer, Image, MainContainer, Price, RealEstateLink, Location } from "./styles";
import EuroIcon from '@mui/icons-material/Euro';

const Card = (props) => {
    // MainContainer
    // inauntru la MainContainer punem RealEstateLink
    // inauntru la RealEstateLink punem Image si DetailsContainer
    // inautnru la DetailsContainer punem Price si Location
    return (
        <MainContainer>
            <RealEstateLink>
            <Image  src={props.img}/>
            <DetailsContainer>
                <Price>{props.price}</Price>
                <Location>{props.location}</Location>     
            </DetailsContainer>
            </RealEstateLink>
        </MainContainer>
    )
}

export default Card;