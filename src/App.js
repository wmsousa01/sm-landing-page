import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Products from './components/Products/Products';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from "./assets/img/avatar.png";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Products />
      <Projects />
      <Contact />
      <FloatingWhatsApp 
      phoneNumber='https://wa.me/5519998602083'
      accountName='Sousas Midia'
      statusMessage='Online'
      allowClickAway
      avatar={logo}
      darkMode
      chatMessage={'Olá, como podemos te ajudar?'} 
      placeholder='Mensagem'
      />
      <Footer />
    </div>
  );
}

export default App;
