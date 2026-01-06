import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import { CTAButton } from './CTAButton';
import { Container } from './Container';
import { cn } from '../utils/cn';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'JR Campo 360', path: '/jr-campo-360' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Contato', path: '/contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    if (path === '/contato') {
      // Scroll para contato se estiver na mesma página
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        return;
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="JR Consultoria Ambiental - Home">
            {logoError ? (
              <span className="text-2xl md:text-3xl font-bold text-brand-green">JR</span>
            ) : (
              <img
                src="/logo.png"
                alt="JR Consultoria Ambiental"
                className="h-14 md:h-16 lg:h-20 w-auto"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  location.pathname === item.path
                    ? 'text-brand-green'
                    : 'text-gray-700 hover:text-brand-green'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <CTAButton
              variant="primary"
              to="/contato"
              onClick={() => handleNavClick('/contato')}
            >
              Agendar diagnóstico
            </CTAButton>
            <CTAButton
              variant="secondary"
              href={config.plataforma.url}
            >
              Acessar plataforma
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-brand-green transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <Container>
              <nav className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={cn(
                      'block text-base font-medium transition-colors duration-200',
                      location.pathname === item.path
                        ? 'text-brand-green'
                        : 'text-gray-700 hover:text-brand-green'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <CTAButton
                    variant="primary"
                    to="/contato"
                    onClick={() => handleNavClick('/contato')}
                    className="w-full"
                  >
                    Agendar diagnóstico
                  </CTAButton>
                  <CTAButton
                    variant="secondary"
                    href={config.plataforma.url}
                    className="w-full"
                  >
                    Acessar plataforma
                  </CTAButton>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
