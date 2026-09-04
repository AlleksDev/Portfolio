import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import ProjectDetailPage from './components/pages/ProjectDetailPage/ProjectDetailPage';
import { ToastProvider } from './context/ToastContext';
import './App.css';

function ScrollToTopAndAnimate() {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId;

    const updateScrollProgress = () => {
      const root = document.documentElement;
      const scrollableHeight = root.scrollHeight - root.clientHeight;
      const nextProgress = scrollableHeight > 0 ? root.scrollTop / scrollableHeight : 0;

      setScrollProgress(Math.min(Math.max(nextProgress, 0), 1));
      frameId = undefined;
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
          },
          { threshold: 0.08, rootMargin: '40px 0px -48px 0px' }
        )
      : null;

    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((element) => {
        if (reducedMotion || !observer) {
          element.classList.add('is-visible');
          return;
        }
        observer.observe(element);
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [location.pathname]);


  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <ScrollToTopAndAnimate />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App;
