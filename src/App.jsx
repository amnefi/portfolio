import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useLocation } from "react-router-dom"; // Importa useLocation
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Body from "./Layouts/Body";
import NotFound from "./Pages/NotFound"; // Importa NotFound


function App() {
  const location = useLocation(); // Obtiene la ruta actual
  const isNotFound = location.pathname !== "/" && 
                     location.pathname !== "/about" && 
                     location.pathname !== "/services" &&
                     location.pathname !== "/contact" && 
                     location.pathname !== "/skills" &&
                     location.pathname !== "/projects";

  return (
    <>
      {!isNotFound && <Header />}  {/* No muestra Header en 404 */}
      {isNotFound ? <NotFound /> : <Body />}
      {!isNotFound && <Footer />}  {/* No muestra Footer en 404 */}
    </>
  );
}

export default App;
