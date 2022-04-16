import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import Layout from "./styles/Layout";


function App() {
  return (

    <div>

      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>


    </div>
  );
}

export default App;
