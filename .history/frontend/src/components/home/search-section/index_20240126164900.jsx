import SearchActions from "./search-actions";

import {
  InnerContainer,
  Container,
  Section,
  Subtitle,
  Tab,
  Title,
  TitleContainer,
  TitlesContainer,
} from "./styles";

function SearchSection() {
  return (
    <Section>
      <Container>
        <TitlesContainer>
          <Title>Bine ai venit pe ResidenceHub!</Title>
          <Subtitle>Platforma de imobiliare lansată de OLX</Subtitle>
        </TitlesContainer>
        <InnerContainer>
          <Tab>Cauta</Tab>
          <SearchActions />
        </InnerContainer>
      </Container>
    </Section>
  );
}

export default SearchSection;
