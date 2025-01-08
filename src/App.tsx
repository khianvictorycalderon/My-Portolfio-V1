import { useState, useEffect } from 'react';
import Navigation from './navigation';
import Menu from './menu';
import Footer from './footer';
import Home from './pages/home';
import Background from './pages/background';
import DevTools from './pages/devtools';
import GoalsAndVision from './pages/goalsvision';
import PrivacyPolicy from './pages/privacypolicy';
import TermsConditions from './pages/termsandconditions';

function App() {
  const menuHiddenStyleProperty = {
    left: "-100vw",
  };
  const menuShownStyleProperty = {
    left: "0",
  };
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [page, setPage] = useState(getPageFromQuery());

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromQuery());
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      setPage(getPageFromQuery());
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  function getPageFromQuery() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('page') || 'home';
  }

  return (
    <>
      <Menu setPage={setPage} onClick={() => { setMenuVisibility(false); }} style={menuVisibility ? menuShownStyleProperty : menuHiddenStyleProperty} />

      <div id="container" style={menuVisibility ? { filter: "blur(10px)" } : { filter: "blur(0px)" }}>
        <Navigation onClick={() => { setMenuVisibility(true); }} />

        {page === 'home' && <Home />}
        {page === 'background' && <Background />}
        {page === 'devtools' && <DevTools />}
        {page === 'goalsvision' && <GoalsAndVision />}
        {page === 'privacypolicy' && <PrivacyPolicy />}
        {page === 'termsandconditions' && <TermsConditions />}

        <Footer />
      </div>
    </>
  );
}

export default App;
