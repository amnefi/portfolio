import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Body from './Layouts/Body';

const validPaths = ['/', '/about', '/services', '/skills', '/projects', '/contact'];

function App() {
  const location = useLocation();
  const showLayout = validPaths.includes(location.pathname);

  return (
    <>
      {showLayout && <Header />}
      <Body />
      {showLayout && <Footer />}
    </>
  );
}

export default App;
