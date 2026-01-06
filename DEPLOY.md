# Guia de Deploy no Vercel

## 📋 Pré-requisitos

1. Conta no Vercel (gratuita): https://vercel.com
2. Domínio configurado: `jrconsultoriamg.com.br`

## 🚀 Opção 1: Deploy via CLI (Recomendado)

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Fazer login

```bash
vercel login
```

### 3. Deploy (primeira vez - vai fazer perguntas)

```bash
cd /home/felipe/Documentos/apps/jrambientalsite
vercel
```

**Responda:**
- Set up and deploy? **Y**
- Which scope? Escolha sua conta/organização
- Link to existing project? **N** (primeira vez)
- What's your project's name? **jr-ambiental-site** (ou o nome que preferir)
- In which directory is your code located? **./** (ponto)
- Want to override settings? **N**

### 4. Deploy de produção

```bash
vercel --prod
```

## 🌐 Opção 2: Deploy via GitHub (Recomendado para produção)

1. **Crie um repositório no GitHub**
2. **Faça push do código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/jr-ambiental-site.git
   git push -u origin main
   ```
3. **No Vercel:**
   - Vá em https://vercel.com/new
   - Importe o repositório do GitHub
   - Configure:
     - Framework Preset: **Vite**
     - Root Directory: **./**
     - Build Command: **npm run build**
     - Output Directory: **dist**
   - Clique em Deploy

## 🔧 Configurar Domínio

### 1. No painel do Vercel:

1. Vá para o projeto
2. Clique em **Settings** → **Domains**
3. Adicione o domínio: `jrconsultoriamg.com.br`
4. Vercel vai mostrar as configurações DNS necessárias

### 2. Configurar DNS no seu provedor de domínio:

Adicione os registros DNS conforme mostrado no Vercel:

**Opção A: Apontar para Vercel (Recomendado)**
- Tipo: **A** ou **CNAME**
- Nome: `@` ou `jrconsultoriamg.com.br`
- Valor: O que o Vercel indicar (geralmente `76.76.21.21` ou um CNAME)

**Opção B: Subdomínio**
- Se preferir usar `www.jrconsultoriamg.com.br`, adicione como CNAME

### 3. Aguardar propagação DNS:

- Pode levar de alguns minutos a 48 horas
- Geralmente leva 15-30 minutos

## ⚙️ Variáveis de Ambiente

No painel do Vercel:

1. Vá em **Settings** → **Environment Variables**
2. Adicione:
   - **Key**: `VITE_CLARITY_ID`
   - **Value**: Seu ID do Microsoft Clarity
   - **Environments**: Production, Preview, Development (todas)

3. Após adicionar, faça um novo deploy

## ✅ Verificações Pós-Deploy

- [ ] Site carregando corretamente
- [ ] Todas as rotas funcionando (Home, JR Campo 360, Serviços, Quem Somos, Contato)
- [ ] Imagens carregando
- [ ] Logo aparecendo no header e footer
- [ ] Formulário de contato funcionando
- [ ] Links do WhatsApp funcionando
- [ ] Link da plataforma funcionando
- [ ] Mobile responsivo

## 📝 Notas Importantes

- ✅ O arquivo `vercel.json` já está configurado
- ✅ React Router está configurado (rewrites)
- ✅ Headers de segurança configurados
- ✅ Cache para imagens configurado
- ✅ Domínio atualizado no código: `jrconsultoriamg.com.br`

## 🔄 Atualizações Futuras

Após o primeiro deploy, para atualizar:

**Via CLI:**
```bash
vercel --prod
```

**Via GitHub:**
- Faça commit e push
- O Vercel faz deploy automaticamente (se configurado)

## 🆘 Troubleshooting

### Problema: Página 404 em rotas
- **Solução**: Verifique se o `vercel.json` tem os rewrites configurados (já está)

### Problema: Imagens não carregam
- **Solução**: Verifique se as imagens estão na pasta `public/images/`

### Problema: Variáveis de ambiente não funcionam
- **Solução**: Verifique se adicionou no painel do Vercel e fez novo deploy
