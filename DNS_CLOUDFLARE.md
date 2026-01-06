# Configuração DNS Cloudflare + Vercel

## Problema Identificado

O site antigo (WordPress) ainda aparece mesmo após configurar na Vercel. Isso geralmente acontece por:
1. **Cache da Cloudflare** (mais comum)
2. **Registros DNS apontando para servidor antigo**
3. **Domínio raiz não configurado** (apenas www)

## Solução Passo a Passo

### 1. Limpar Cache da Cloudflare (OBRIGATÓRIO)

1. Acesse: https://dash.cloudflare.com
2. Selecione o domínio `jrconsultoriamg.com.br`
3. Vá em **Caching** → **Configuration**
4. Clique em **Purge Everything** (Limpar Tudo)
5. Aguarde 30 segundos

### 2. Verificar e Configurar Registros DNS

Na Cloudflare, você precisa ter os seguintes registros:

#### Para o domínio raiz (jrconsultoriamg.com.br):
- **Tipo**: `CNAME`
- **Nome**: `@` ou `jrconsultoriamg.com.br`
- **Conteúdo**: `cname.vercel-dns.com.`
- **Proxy**: ❌ Desabilitado (nuvem cinza/laranja)

**OU**

- **Tipo**: `A`
- **Nome**: `@` ou `jrconsultoriamg.com.br`
- **Conteúdo**: `76.76.21.21`
- **Proxy**: ❌ Desabilitado (nuvem cinza/laranja)

#### Para www (www.jrconsultoriamg.com.br):
- **Tipo**: `CNAME`
- **Nome**: `www`
- **Conteúdo**: `cname.vercel-dns.com.`
- **Proxy**: ❌ Desabilitado (nuvem cinza/laranja)

### 3. Remover Registros Antigos

**IMPORTANTE**: Remova qualquer registro que aponte para:
- IPs antigos do WordPress
- Servidores antigos
- Registros A que apontam para IPs que não são da Vercel (76.76.21.21)

### 4. Verificar no Vercel

1. Acesse: https://vercel.com/felipe-rodrigues-da-silvas-projects/jrambientalsite/settings/domains
2. Verifique se ambos os domínios estão:
   - `jrconsultoriamg.com.br` ✅
   - `www.jrconsultoriamg.com.br` ✅
3. Ambos devem mostrar "Valid Configuration"

### 5. Aguardar Propagação DNS

- Pode levar de 5 minutos a 48 horas
- Geralmente funciona em 15-30 minutos
- Verifique em: https://dnschecker.org

### 6. Limpar Cache do Navegador

- **Chrome/Edge**: Ctrl + Shift + Delete → Limpar cache
- **Firefox**: Ctrl + Shift + Delete → Limpar cache
- Ou use **Modo Anônimo/Privado**

## Configuração Recomendada na Cloudflare

### Registros DNS que devem existir:

```
Tipo    | Nome                    | Conteúdo                | Proxy
--------|-------------------------|-------------------------|------
CNAME   | @ (ou raiz)             | cname.vercel-dns.com.   | OFF
CNAME   | www                     | cname.vercel-dns.com.   | OFF
```

**OU**

```
Tipo    | Nome                    | Conteúdo     | Proxy
--------|-------------------------|--------------|------
A       | @ (ou raiz)             | 76.76.21.21  | OFF
CNAME   | www                     | cname.vercel-dns.com. | OFF
```

## ⚠️ IMPORTANTE: Desabilitar Proxy da Cloudflare

**Desabilite o Proxy (CDN) da Cloudflare** para os registros DNS da Vercel:
- A nuvem deve estar **cinza/laranja** (não laranja)
- Clique na nuvem para alternar entre Proxy ON/OFF
- Para Vercel, geralmente funciona melhor com Proxy **OFF**

## Verificação Final

Após configurar, verifique:

1. ✅ Cache da Cloudflare limpo
2. ✅ DNS apontando para Vercel
3. ✅ Domínio raiz configurado (não só www)
4. ✅ Proxy da Cloudflare desabilitado
5. ✅ Domínios válidos no Vercel
6. ✅ Cache do navegador limpo

## Se ainda não funcionar

1. Aguarde mais tempo (DNS pode demorar)
2. Verifique em múltiplos locais: https://dnschecker.org/#A/jrconsultoriamg.com.br
3. Tente acessar diretamente: https://jrambientalsite.vercel.app (deve funcionar)
4. Verifique se há redirects no código antigo
