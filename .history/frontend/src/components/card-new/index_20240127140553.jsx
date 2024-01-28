import { DetailsContainer, Image, MainContainer, House, Apartments   } from "./styles";


const CardNew = (props) => {
    return (
        <MainContainer href={"/anunt-imobiliar&id="+props.id}>
            <Image  src={props.img}/>
            <DetailsContainer>
                <Location>{props.location}</Location>     
            </DetailsContainer>
        </MainContainer>
    )
}

export default Card;