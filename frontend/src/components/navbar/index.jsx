import { ExpandMore, PersonOutline, PersonOutlined } from "@mui/icons-material";
import {
  Nav,
  Header,
  LogoIcon,
  LogoText,
  ForSellButton,
  LogoContainer,
  DropdownsContainer,
  ForRentButton,
  ActionsContainer,
  MyAccountButton,
  AddResidenceButton,
  LogoInnerText,
} from "./styles";

function Navbar() {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <LogoIcon />
          <LogoText>
            Residence<LogoInnerText>Hub</LogoInnerText>
          </LogoText>
        </LogoContainer>
        <DropdownsContainer>
          <ForSellButton endIcon={<ExpandMore />}>De vanzare</ForSellButton>
          <ForRentButton endIcon={<ExpandMore />}>De inchiriat</ForRentButton>
        </DropdownsContainer>
        <ActionsContainer>
          <MyAccountButton startIcon={<PersonOutline />}>
            Contul meu
          </MyAccountButton>
          <AddResidenceButton>Adauga anunt</AddResidenceButton>
        </ActionsContainer>
      </Nav>
    </Header>
  );
}

export default Navbar;
