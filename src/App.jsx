import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import ProjectDetailPage from './components/pages/ProjectDetailPage/ProjectDetailPage';
import './App.css';

function ScrollToTopAndAnimate() {
  const location = useLocation();

  useEffect(() => {
    // Reiniciar el scroll al cambiar de ruta
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Darle un pequeño tiempo de gracia a React para montar el DOM
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTopAndAnimate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
