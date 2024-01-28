import SearchSection from "../../components/home/search-section";
import PromotedRealEstate from "../../components/promoted-real-estates";
import SaleCard from "../../components/properties-for-sale";
import { MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <SearchSection />
      <PromotedRealEstate />
      <SaleCard/>
    </MainContainer>
  );
}

export default Home;
