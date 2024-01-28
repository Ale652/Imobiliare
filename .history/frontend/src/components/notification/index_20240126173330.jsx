import { Message } from "@mui/icons-material";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


function Notification() {
    const { message, severity } = useSelector(state => state.notification)

    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    )
}