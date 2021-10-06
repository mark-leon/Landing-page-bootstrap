import About from "./Components/About";
import Contact from "./Components/Contact";
import Cta from "./Components/Cta";
import Faq from "./Components/Faq";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import Team from "./Components/Team";
function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Feature></Feature>
      {/* <Cta></Cta> */}
      <Services></Services>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      {/* <Faq></Faq> */}
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

