import { AnimatePresence, motion } from 'framer-motion';
import { Database, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [glowIndex, setGlowIndex] = useState(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setGlowIndex(index);
      index = (index + 1) % navLinks.length;
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Contact', href: '#contact' },
    { name: 'Databases', href: '#databases' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        {/* 🌱 LOGO WITH POP + PARTICLES */}
        <div className='relative overflow-visible'>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 10,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 40,
                y: -Math.random() * 30 - 20,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.05,
              }}
              className='absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-papaya'
            />
          ))}

          <motion.a
            href='#'
            initial={{ opacity: 0, y: 40, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1.2, 0.5, 1],
            }}
            className='inline-flex items-center gap-4 text-white'
          >
            <span className='relative grid h-12 w-12 place-items-center rounded-full border border-cyan/50 bg-cyan/5 text-lg font-bold text-cyan shadow-[0_0_18px_rgba(34,211,238,0.16)]'>
              DK
              <Database className='absolute -right-2 -bottom-2 h-4 w-4 text-cyan' />
            </span>
            <span className='hidden sm:flex flex-col'>
              <span className='text-sm uppercase tracking-[0.35em] text-gray-300'>
                Davit Khanal
              </span>
              <span className='text-[10px] uppercase tracking-[0.35em] text-cyan/70'>
                Database Engineer
              </span>
            </span>
          </motion.a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8'>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-gray-300 hover:text-cyan transition-colors text-sm font-medium uppercase tracking-widest
      ${glowIndex === index ? 'glow' : ''}`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-white'
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background border-b border-white/10 overflow-hidden'
          >
            <div className='flex flex-col px-6 py-4 space-y-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-gray-300 hover:text-papaya text-lg font-medium'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
