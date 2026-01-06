import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { config } from '../config';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'JR Campo 360', path: '/jr-campo-360' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Contato', path: '/contato' },
];

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Frase Institucional */}
          <div>
            {logoError ? (
              <h3 className="text-white font-bold text-lg mb-4">JR Consultoria Ambiental MG</h3>
            ) : (
              <img
                src="/logo.png"
                alt="JR Consultoria Ambiental MG"
                className="h-14 md:h-16 w-auto mb-4 brightness-0 invert"
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-sm">
              Consultoria ambiental e tecnologia aplicada ao agro. Regularização, monitoramento e
              conformidade com rastreabilidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-brand-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Acesso Rápido</h3>
            <CTAButton
              variant="secondary"
              href={config.plataforma.url}
              className="w-full md:w-auto"
            >
              Acessar plataforma
            </CTAButton>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JR Consultoria Ambiental MG. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
