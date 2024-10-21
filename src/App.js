import Navbar from "./Components/Navbar/Navabar";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services.js";
import Mywork from "./Components/Mywork/Mywork.js";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Mywork></Mywork>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
