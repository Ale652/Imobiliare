import SearchSection from "../../components/home/search-section";
import PromotedRealEstate from "../../components/promoted-real-estates";
import RentCard from "../../components/properties-for-rent";
import SaleCard from "../../components/properties-for-sale";
import { MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <SearchSection />
      <PromotedRealEstate />
      <SaleCard/>
      <RentCard/>
      <RealEstatePropertiesNew/>
    </MainContainer>
  );
}

export default Home;
