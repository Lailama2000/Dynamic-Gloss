import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navbar from './Navbar';
import Footer from './Footer';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PriceList from './Pages/PriceList';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div >
       <HelmetProvider>
        <HashRouter>
          <Navbar />
          <Routes>
          <Route path="/" element= {<MainPage />}/>
          <Route path="/privacypolicy" element= {<PrivacyPolicy />}/>
          <Route path="/pricelist" element= {<PriceList />}/>
          <Route path="/gallery" element= {<Gallery />}/>
          </Routes>
          <Footer />
        </HashRouter>
        </HelmetProvider>
    </div>
  );
}

export default App;
