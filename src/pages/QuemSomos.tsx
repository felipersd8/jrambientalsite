import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { CTAButton } from '../components/CTAButton';
import { content } from '../data/content';
import { seoData } from '../data/seo';

export function QuemSomos() {
  const { quemSomos } = content;
  const { hero, proposito, missaoVisaoValores } = quemSomos;

  return (
    <>
      <SEO
        title={seoData.quemSomos.title}
        description={seoData.quemSomos.description}
        canonical={seoData.quemSomos.canonical}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {hero.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {hero.text}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Propósito */}
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
              {proposito.h2}
            </h2>
            <p className="text-lg text-gray-600">
              {proposito.text}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Missão, Visão e Valores */}
      <Section className="bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missão</h3>
                <p className="text-gray-600">{missaoVisaoValores.missao}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visão</h3>
                <p className="text-gray-600">{missaoVisaoValores.visao}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="space-y-3">
                {missaoVisaoValores.valores.map((valor, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="text-brand-green mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Conheça nossa tecnologia
            </h2>
            <CTAButton variant="primary" to="/jr-campo-360">
              Conhecer o JR Campo 360
            </CTAButton>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
