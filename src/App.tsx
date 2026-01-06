import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Clarity } from './components/Clarity';
import { Home } from './pages/Home';
import { JRCampo360 } from './pages/JRCampo360';
import { Servicos } from './pages/Servicos';
import { QuemSomos } from './pages/QuemSomos';
import { Contato } from './pages/Contato';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Clarity />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jr-campo-360" element={<JRCampo360 />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/contato" element={<Contato />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
