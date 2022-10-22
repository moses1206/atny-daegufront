import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Gucci from "./components/Gucci/Gucci";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Ranking from "./components/Ranking/Ranking";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Products />
      <Gucci />
      <Ranking />
      <Footer />
    </div>
  );
}

export default App;
