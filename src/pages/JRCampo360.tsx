import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { CTAButton } from '../components/CTAButton';
import { HeroImage } from '../components/HeroImage';
import { content } from '../data/content';
import { seoData } from '../data/seo';
import { config } from '../config';

export function JRCampo360() {
  const { jrCampo360 } = content;
  const { hero, beneficios, modulos, diferencial, ctaFinal } = jrCampo360;

  return (
    <>
      <SEO
        title={seoData.jrCampo360.title}
        description={seoData.jrCampo360.description}
        canonical={seoData.jrCampo360.canonical}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {hero.h1}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" to="/contato">
                  Agendar demonstração
                </CTAButton>
                <CTAButton variant="secondary" href={config.plataforma.url}>
                  Acessar plataforma
                </CTAButton>
              </div>
            </motion.div>
            <HeroImage
              src="/images/hero-jr-campo-360.png"
              alt="JR Campo 360 - Monitoramento e gestão para o agro"
              className="hidden lg:block"
            />
          </div>
        </Container>
      </Section>

      {/* Benefícios */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {beneficios.h2}
            </h2>
            <ul className="space-y-4">
              {beneficios.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start space-x-3 bg-white p-6 rounded-card shadow-sm"
                >
                  <Check className="text-brand-green mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </Section>

      {/* Módulos */}
      <Section className="bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {modulos.h2}
            </h2>
            <ul className="space-y-4">
              {modulos.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start space-x-3 bg-white p-6 rounded-card shadow-sm"
                >
                  <Check className="text-accent-blue mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </Section>

      {/* Diferencial */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {diferencial.h2}
            </h2>
            <p className="text-lg text-gray-600">
              {diferencial.text}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {ctaFinal.h2}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" to="/contato">
                Agendar demonstração
              </CTAButton>
              <CTAButton variant="outline" to="/contato">
                Solicitar proposta
              </CTAButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
