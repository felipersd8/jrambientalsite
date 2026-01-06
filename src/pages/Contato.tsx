import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { CTAButton } from '../components/CTAButton';
import { content } from '../data/content';
import { seoData } from '../data/seo';
import { config } from '../config';
import { cn } from '../utils/cn';

const contatoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  fazenda: z.string().min(2, 'Nome da fazenda/empresa é obrigatório'),
  municipio: z.string().min(2, 'Município é obrigatório'),
  uf: z.string().length(2, 'UF deve ter 2 caracteres'),
  whatsapp: z.string().min(10, 'WhatsApp inválido'),
  email: z.string().email('E-mail inválido'),
  tema: z.string().min(1, 'Selecione um tema'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

export function Contato() {
  const { contato } = content;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
  });

  const onSubmit = async (data: ContatoFormData) => {
    // Por enquanto, redireciona para WhatsApp com a mensagem formatada
    const message = `Olá! Meu nome é ${data.nome} da ${data.fazenda} em ${data.municipio}/${data.uf}. Gostaria de saber mais sobre: ${data.tema}. ${data.mensagem}`;
    const whatsappUrl = `${config.whatsapp.link}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <>
      <SEO
        title={seoData.contato.title}
        description={seoData.contato.description}
        canonical={seoData.contato.canonical}
      />

      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white" id="contato">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {contato.hero.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              {contato.hero.text}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Form */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-card shadow-sm p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    {...register('nome')}
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="fazenda" className="block text-sm font-medium text-gray-700 mb-2">
                    Fazenda / Empresa *
                  </label>
                  <input
                    type="text"
                    id="fazenda"
                    {...register('fazenda')}
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.fazenda ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.fazenda && (
                    <p className="mt-1 text-sm text-red-600">{errors.fazenda.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-2">
                    Município *
                  </label>
                  <input
                    type="text"
                    id="municipio"
                    {...register('municipio')}
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.municipio ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.municipio && (
                    <p className="mt-1 text-sm text-red-600">{errors.municipio.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-2">
                    UF *
                  </label>
                  <input
                    type="text"
                    id="uf"
                    {...register('uf')}
                    maxLength={2}
                    placeholder="MG"
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.uf ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.uf && (
                    <p className="mt-1 text-sm text-red-600">{errors.uf.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    {...register('whatsapp')}
                    placeholder="(31) 99999-9999"
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.whatsapp ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={cn(
                      'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all',
                      errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="tema" className="block text-sm font-medium text-gray-700 mb-2">
                  Tema *
                </label>
                <select
                  id="tema"
                  {...register('tema')}
                  className={cn(
                    'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all cursor-pointer',
                    errors.tema ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                  )}
                >
                  <option value="">Selecione um tema</option>
                  {contato.form.tema.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.tema && (
                  <p className="mt-1 text-sm text-red-600">{errors.tema.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  {...register('mensagem')}
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all resize-y',
                    errors.mensagem ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                  )}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </CTAButton>
                <CTAButton
                  variant="outline"
                  href={config.whatsapp.link}
                  className="flex-1"
                >
                  Chamar no WhatsApp
                </CTAButton>
              </div>
            </form>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
