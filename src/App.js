import './App.css';
import { Outlet, Link } from "react-router-dom";

import Menu from './components/menu/Menu';
import Body from './components/body/body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Body/>
        <Outlet /> 
      <Footer />
    </div>
  );
}

export default App;
