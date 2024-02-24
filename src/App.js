import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div >
       <HelmetProvider>
        <HashRouter>
          <Navbar />
          <Routes>
          <Route path="/" element= {<MainPage />}/>
          </Routes>
          <Footer />
        </HashRouter>
        </HelmetProvider>
    </div>
  );
}

export default App;
