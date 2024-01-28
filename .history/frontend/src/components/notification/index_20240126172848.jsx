import { Message } from "@mui/icons-material";
import { Container } from "./styles";
import { useSelector } from "react-redux";

function Notification() {
    const { message } = useSelector(state => state.notification)

    return (
        <Container>
            <Message></Message>
        </Container>
    )
}