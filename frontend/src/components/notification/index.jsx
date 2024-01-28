import { Check } from "@mui/icons-material";
import {
    Text,
    Container,
} from "./styles";
import { useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




function Notification() {
    const { message, severity } = useSelector(state => state.notification)

    return (
        <Container>
            <CheckCircleIcon />
            <Text>Te-ai inregistrat cu succes</Text>
            <IconButton aria-label="delete" size="small">
                <CloseIcon />
            </IconButton>
        </Container>
    )
}

export default Notification;