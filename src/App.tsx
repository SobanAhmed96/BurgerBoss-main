import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import MobileApp from './Components/Mobile/MobileApp';
import { useIsMobileApp } from './hooks/useIsMobileApp';
import { useLocation } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const App = () => {
  const isMobileApp = useIsMobileApp();
  const location = useLocation();

  // Mobile/Android: Show dedicated mobile PWA UI with bottom navigation
  if (isMobileApp) {
    return <MobileApp />;
  }

  // Desktop/Web: Show original desktop layout (Navbar, content, Footer)
  const renderDesktopContent = () => {
    switch (location.pathname) {
      case '/menu':
        return <Menu />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return (
          <>
            <Slider />
          </>
        );
    }
  };

  return (
    <div>
      <Navbar />
      {renderDesktopContent()}
      <Footer />
    </div>
  );
};

export default App;

