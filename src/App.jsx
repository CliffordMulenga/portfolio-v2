import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Routes, BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';
import Work from './pages/Work';
import Project from './pages/Project';
import FloatingMenu from './components/FloatingMenu';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Homepage />
            </motion.div>
          }
        />
        <Route
          path="/work"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Work />
            </motion.div>
          }
        />
        <Route
          path="/work/:id"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Project />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const ScrollManager = ({ lenisRef }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const target = location.hash;
    const scrollTarget = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: -80 });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const timeout = setTimeout(scrollTarget, 50);
    return () => clearTimeout(timeout);
  }, [location, lenisRef]);

  return null;
};

function App() {
  const hasInit = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (hasInit.current) return;
    hasInit.current = true;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;
      event.preventDefault();
      lenis.scrollTo(href, { offset: -80 });
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    gsap.utils.toArray('[data-parallax]').forEach((el) => {
      const speed = Number(el.getAttribute('data-parallax')) || 0.15;
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    const magnets = gsap.utils.toArray('.magnetic');
    const magneticHandlers = magnets.map((mag) => {
      const strength = Number(mag.getAttribute('data-strength')) || 40;
      const xTo = gsap.quickTo(mag, 'x', { duration: 0.4, ease: 'power2.out' });
      const yTo = gsap.quickTo(mag, 'y', { duration: 0.4, ease: 'power2.out' });
      const handleMove = (event) => {
        const rect = mag.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        xTo((x / rect.width) * strength);
        yTo((y / rect.height) * strength);
      };
      const handleLeave = () => {
        gsap.to(mag, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
      };
      mag.addEventListener('mousemove', handleMove);
      mag.addEventListener('mouseleave', handleLeave);
      return { mag, handleMove, handleLeave };
    });

    let headerTrigger = null;
    const headerEl = document.getElementById('main-header');
    const floatingMenu = document.querySelector('.btn-hamburger');
    const setFloatingVisibility = (show) => {
      if (!floatingMenu) return;
      floatingMenu.classList.toggle('is-visible', show);
      gsap.to(floatingMenu, {
        autoAlpha: show ? 1 : 0,
        y: show ? 0 : -10,
        duration: show ? 0.3 : 0.2,
        ease: show ? 'power2.out' : 'power2.in',
      });
    };

    const setupHeaderTrigger = () => {
      if (!headerEl || !floatingMenu) return;
      if (headerTrigger) headerTrigger.kill();
      if (window.innerWidth < 768) {
        setFloatingVisibility(true);
        return;
      }
      setFloatingVisibility(false);
      headerTrigger = ScrollTrigger.create({
        trigger: headerEl,
        start: 'bottom top+=10',
        onEnter: () => setFloatingVisibility(true),
        onLeaveBack: () => setFloatingVisibility(false),
      });
    };

    setupHeaderTrigger();
    const handleResize = () => setupHeaderTrigger();
    window.addEventListener('resize', handleResize);

    const loader = loaderRef.current;
    if (loader) {
      const timeline = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });
      timeline
        .fromTo(
          loader,
          { opacity: 1 },
          { opacity: 1, duration: 0.2 }
        )
        .to(loader.querySelector('[data-loader-line]'), {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
        })
        .to(loader.querySelector('[data-loader-text]'), {
          y: -16,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
        })
        .to(
          loader,
          { yPercent: -100, duration: 0.8, ease: 'power3.inOut' },
          '-=0.2'
        );
    }

    ScrollTrigger.refresh();

    return () => {
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick));
      lenis.destroy();
      lenisRef.current = null;
      magneticHandlers.forEach(({ mag, handleMove, handleLeave }) => {
        mag.removeEventListener('mousemove', handleMove);
        mag.removeEventListener('mouseleave', handleLeave);
      });
      if (headerTrigger) headerTrigger.kill();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.killAll();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  return (
    <Router>
      <ScrollManager lenisRef={lenisRef} />
      {isLoading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[color:var(--bg-main)]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="text-3xl sm:text-4xl font-heading tracking-wide text-[color:var(--ink)]" data-loader-text>
              Clifford Mulenga
            </div>
            <div className="h-[2px] w-48 overflow-hidden bg-[color:var(--border)]">
              <div className="h-full w-full origin-left scale-x-0 bg-[color:var(--accent)]" data-loader-line />
            </div>
          </div>
        </div>
      )}
      {/* Navbar */}
      <Header />
      {/* <FloatingMenu /> */}

      {/* routes */}
      <AnimatedRoutes />

      {/* footer */}
      <Footer />

    </Router>
  )
}

export default App
