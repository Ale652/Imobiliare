import SearchActions from "./search-actions";

import {
  InnerContainer,
  Container,
  Section,
  Subtitle,
  Tab,
  Title,
} from "./styles";

function SearchSection() {
  return (
    <Section>
      <Container>
        <Title>Bine ai venit pe ResidenceHub!</Title>
        <Subtitle>Platforma de imobiliare lansată de OLX</Subtitle>
        <InnerContainer>
          <Tab>Cauta</Tab>
          <SearchActions />
        </InnerContainer>
      </Container>
    </Section>
  );
}

export default SearchSection;
