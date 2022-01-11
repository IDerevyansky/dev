import './App.css';
import { Outlet, Link } from "react-router-dom";

import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Menu />
        <Outlet /> 
      <Footer />
    </div>
  );
}

export default App;
