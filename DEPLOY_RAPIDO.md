# Deploy Rápido no Vercel

## 🚀 Passo a Passo

### 1. Login no Vercel (se ainda não fez)
```bash
vercel login
```

### 2. Deploy de Produção
```bash
cd /home/felipe/Documentos/apps/jrambientalsite
vercel --prod
```

**Na primeira vez, vai perguntar:**
- Set up and deploy? → **Y**
- Which scope? → Escolha sua conta
- Link to existing project? → **N** (primeira vez)
- What's your project's name? → **jr-ambiental-site** (ou o nome que quiser)
- In which directory is your code located? → **./** (ponto)
- Want to override settings? → **N**

### 3. Configurar Domínio no Painel do Vercel

1. Acesse: https://vercel.com/dashboard
2. Clique no projeto **jr-ambiental-site**
3. Vá em **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite: `jrconsultoriamg.com.br`
6. Clique em **Add**

### 4. Configurar DNS no Provedor do Domínio

O Vercel vai mostrar as instruções DNS. Geralmente:

**Para o domínio raiz (jrconsultoriamg.com.br):**
- Tipo: **A**
- Nome: `@` ou deixar em branco
- Valor: `76.76.21.21` (IP do Vercel)

**OU:**

- Tipo: **CNAME**
- Nome: `@`
- Valor: `cname.vercel-dns.com.`

### 5. Aguardar Propagação DNS

- Pode levar de 15 minutos a 48 horas
- Geralmente funciona em 15-30 minutos

### 6. (Opcional) Adicionar Variável de Ambiente

Se usar Microsoft Clarity:

1. No Vercel: **Settings** → **Environment Variables**
2. Adicione:
   - Key: `VITE_CLARITY_ID`
   - Value: seu ID do Clarity
   - Environments: Production, Preview, Development
3. Faça um novo deploy: `vercel --prod`

## ✅ Pronto!

Após configurar o DNS, seu site estará disponível em:
- **https://jrconsultoriamg.com.br**
