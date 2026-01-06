import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { CTAButton } from '../components/CTAButton';
import { Image } from '../components/Image';
import { HeroImage } from '../components/HeroImage';
import { content } from '../data/content';
import { seoData } from '../data/seo';
import { config } from '../config';

export function Home() {
  const { home } = content;
  const { hero, oQueResolvemos, jrCampo360, solucoes, comoFunciona, dna, ctaFinal } = home;

  return (
    <>
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        canonical={seoData.home.canonical}
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
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                {hero.subtitle}
              </p>
              <ul className="space-y-3 mb-10">
                {hero.bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="text-brand-green mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <CTAButton variant="primary" to="/contato">
                  Agendar diagnóstico
                </CTAButton>
                <CTAButton variant="outline" to="/jr-campo-360">
                  Conhecer o JR Campo 360
                </CTAButton>
              </motion.div>
            </motion.div>
            <HeroImage
              src="/images/hero-home.png"
              alt="Consultoria ambiental e monitoramento para o agro"
              className="hidden lg:block"
            />
          </div>
        </Container>
      </Section>

      {/* O Que Resolvemos */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {oQueResolvemos.h2}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {oQueResolvemos.text}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oQueResolvemos.cards.map((card, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="mb-4 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/card-${index + 1}.png`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    delay={index * 0.1}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* JR Campo 360 Destaque */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {jrCampo360.h2}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {jrCampo360.text}
                </p>
                <ul className="space-y-3 mb-10">
                  {jrCampo360.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="text-brand-green mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton variant="primary" to="/contato">
                    Agendar demonstração
                  </CTAButton>
                  <CTAButton variant="outline" to="/jr-campo-360">
                    Ver funcionalidades
                  </CTAButton>
                </div>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/jr-campo-360.png"
                alt="JR Campo 360 - Plataforma de monitoramento"
                className="w-full h-full max-h-[500px] object-cover"
                delay={0.2}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Soluções JR */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {solucoes.h2}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              {solucoes.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <Check className="text-brand-green mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </Section>

      {/* Como Funciona */}
      <Section className="bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {comoFunciona.h2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {comoFunciona.steps.map((step, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={`/images/passo-${index + 1}.png`}
                        alt={`Passo ${index + 1}: ${step}`}
                        className="w-full h-full object-cover"
                        delay={index * 0.1}
                      />
                    </div>
                    <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* DNA JR */}
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
              {dna.h2}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Missão</h3>
                <p className="text-gray-600">{dna.missao}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visão</h3>
                <p className="text-gray-600">{dna.visao}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Valores</h3>
                <ul className="space-y-2">
                  {dna.valores.map((valor, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-brand-green mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{valor}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {ctaFinal.h2}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {ctaFinal.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" to="/contato">
                Solicitar proposta
              </CTAButton>
              <CTAButton variant="outline" href={config.whatsapp.link}>
                Chamar no WhatsApp
              </CTAButton>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
