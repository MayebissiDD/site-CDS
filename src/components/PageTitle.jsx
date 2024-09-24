import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Accueil - Congo Digital Services';
        break;
      case '/about':
        document.title = 'À propos - Congo Digital Services';
        break;
      case '/services':
        document.title = 'Services - Congo Digital Services';
        break;
      case '/portfolio':
        document.title = 'Portefolio - Congo Digital Services';
        break;
      case '/contact':
        document.title = 'Contact - Congo Digital Services';
        break;
      case '/blog':
        document.title = 'Blog - Congo Digital Services';
        break;
      default:
        document.title = 'Congo Digital Services';
    }
  }, [location.pathname]);

  return null;
};

export default PageTitle;
