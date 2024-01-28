import SearchSection from "../../components/home/search-section";
import PromotedRealEstate from "../../components/promoted-real-estates";
import { MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <SearchSection />
      <PromotedRealEstate />
    </MainContainer>
  );
}

export default Home;
