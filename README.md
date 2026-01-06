# JR Consultoria Ambiental & JR Campo 360 - Site Moderno

Site moderno desenvolvido em React + TypeScript + Vite para a JR Consultoria Ambiental MG.

## 🚀 Tecnologias

- **Vite** - Build tool
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento
- **TailwindCSS** - Estilização
- **Framer Motion** - Animações
- **React Hook Form + Zod** - Formulários com validação
- **React Helmet Async** - SEO

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

O build gera arquivos estáticos na pasta `dist/` prontos para deploy.

## 🚀 Deploy no Vercel

O projeto está configurado para deploy no Vercel:

1. **Instale a CLI do Vercel** (se ainda não tiver):
   ```bash
   npm i -g vercel
   ```

2. **Faça login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy de produção**:
   ```bash
   vercel --prod
   ```

5. **Configure o domínio** `jrconsultoriamg.com.br` no painel do Vercel:
   - Vá em Settings → Domains
   - Adicione o domínio `jrconsultoriamg.com.br`
   - Siga as instruções para configurar o DNS

**Nota:** O arquivo `vercel.json` já está configurado com as rotas do React Router e headers de segurança.

## ⚙️ Variáveis de Ambiente

Copie `.env.example` para `.env` e configure:

```
VITE_CLARITY_ID=seu_id_do_clarity
```

## 🖼️ Imagens

O site está preparado para receber imagens. Veja o arquivo `IMAGENS.md` na raiz do projeto para saber quais imagens são necessárias e onde colocá-las (na pasta `/public/images/`).

O site funcionará normalmente mesmo sem as imagens, mas recomenda-se adicioná-las para melhor experiência visual.

## 📁 Estrutura

```
src/
├── pages/          # Páginas do site
├── components/     # Componentes reutilizáveis
├── data/           # Dados e textos
├── config/         # Configurações
├── styles/         # Estilos globais
└── utils/          # Utilitários
```
