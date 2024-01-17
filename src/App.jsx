import Navbar from "./components/navbar/Navbar";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Marquee from "./components/marquee/Marquee";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
        <HomePage />
          <Page2 />
            <Page3 />
            <Marquee />
            <Page4/>
      <Marquee />
    <Page5/>
    <Marquee />
    <Footer/>

                 
    </>
  );
}

export default App;
