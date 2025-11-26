import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Databases from './components/Databases';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MouseTrail from './components/ui/MouseTrail';

function App() {
  useEffect(() => {
    // Console ASCII Art
    console.log(`
%c
██████╗  █████╗ ██╗   ██╗██╗████████╗    ██╗  ██╗██╗  ██╗ █████╗ ███╗   ██╗ █████╗ ██╗     
██╔══██╗██╔══██╗██║   ██║██║╚══██╔══╝    ██║ ██╔╝██║  ██║██╔══██╗████╗  ██║██╔══██╗██║     
██║  ██║███████║██║   ██║██║   ██║       █████╔╝ ███████║███████║██╔██╗ ██║███████║██║     
██║  ██║██╔══██║╚██╗ ██╔╝██║   ██║       ██╔═██╗ ██╔══██║██╔══██║██║╚██╗██║██╔══██║██║     
██████╔╝██║  ██║ ╚████╔╝ ██║   ██║       ██║  ██╗██║  ██║██║  ██║██║ ╚████║██║  ██║███████╗
╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                                                             
`,
      'color: #FF8700; font-weight: bold;'
      
    );

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-papaya selection:text-white">
      <MouseTrail />
      <Navbar />
      <main>
        <Hero />
        <Databases />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Google Antigravity. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
