import Hero from "./component/Hero/Hero";
import NavBar from "./component/navbar/NavBar";
import bgImg from "./assets/bg.png";
import Offers from "./component/offers/Offers";
import Takecare from "./component/TakeCare/Takecare";
import FilterData from "./component/filterData/FilterData";
import Importance from "./component/importanceTake/Importance";
import CostumerSay from "./component/costumer/CostumerSay";
import Discount from "./component/discount/Discount";
import Footer from "./component/footer/Footer";

export default function App() {
  const styleImg = {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeated: "no-repeat",
  };
  return (
    <>
      <div className="App" style={styleImg}>
        <NavBar />
        <Hero />
      </div>
      <Offers />
      <Takecare />
      <FilterData />
      <Importance />
      <CostumerSay />
      <Discount />
      <Footer />
    </>
  );
}
