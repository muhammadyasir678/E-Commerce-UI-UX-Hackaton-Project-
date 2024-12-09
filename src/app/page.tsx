import DarkHeader from "./components/dark-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";

export default function Home() {
  return (
    <div>
      <DarkHeader />
      <Navbar />
      <Carausel />
      <Editors />
      <ProductCard />
      <GreenDiv />
      <Whitediv />
      <Lastdiv />
      <Footer />
    </div>
  );
}
