  // src/App.jsx
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
  import Home from './components/Home'
  import Cursos from './components/Cursos'
  import Contato from '../src/components/Contato'
  import './assets/teste.css';
  
  export default function App() {
    return (
      <BrowserRouter>
       <nav className="cont">
         <Link to="/">Inicio</Link>  <Link to="/Cursos">Cursos</Link>  <Link to="/Contato">Contato</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Cursos" element={<Cursos />} />
         <Route path="/Contato" element={<Contato />} />
       </Routes>
     </BrowserRouter>
   );
 }
