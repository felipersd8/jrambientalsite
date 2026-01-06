# 🔴 CORREÇÃO URGENTE - DNS Cloudflare

## Problema Identificado

O domínio raiz `jrconsultoriamg.com.br` está apontando para o servidor antigo!

### ❌ Registro ERRADO (Linha 34):
```
jrconsultoriamg.com.br.  600  IN  A  216.150.1.1
```
**Este IP (216.150.1.1) é do servidor antigo da Hostinger/WordPress!**

### ✅ Registro CORRETO (Linha 56):
```
www.jrconsultoriamg.com.br.  600  IN  CNAME  d3a1b9549633b02d.vercel-dns-016.com.
```
**O WWW está correto e apontando para Vercel!**

## 🔧 SOLUÇÃO - Passo a Passo

### 1. Acesse a Cloudflare
- https://dash.cloudflare.com
- Selecione o domínio `jrconsultoriamg.com.br`
- Vá em **DNS** → **Records**

### 2. REMOVER o registro A antigo
- Encontre o registro:
  - **Tipo**: A
  - **Nome**: `@` ou `jrconsultoriamg.com.br`
  - **Conteúdo**: `216.150.1.1`
- **DELETE este registro!**

### 3. CRIAR novo registro para domínio raiz

**OPÇÃO A - CNAME (Recomendado):**
- **Tipo**: CNAME
- **Nome**: `@` (ou deixar em branco para raiz)
- **Conteúdo**: `cname.vercel-dns.com.` (com ponto no final!)
- **Proxy**: ❌ Desabilitado (nuvem cinza)
- **TTL**: Auto

**OPÇÃO B - Registro A:**
- **Tipo**: A
- **Nome**: `@` (ou deixar em branco para raiz)
- **Conteúdo**: `76.76.21.21`
- **Proxy**: ❌ Desabilitado (nuvem cinza)
- **TTL**: Auto

### 4. Verificar registro WWW
O registro WWW já está correto:
- **Tipo**: CNAME
- **Nome**: `www`
- **Conteúdo**: `d3a1b9549633b02d.vercel-dns-016.com.` ✅
- **Proxy**: ❌ Desabilitado (nuvem cinza)

### 5. Limpar Cache da Cloudflare
1. Vá em **Caching** → **Configuration**
2. Clique em **Purge Everything**
3. Aguarde 30 segundos

### 6. Aguardar Propagação
- Pode levar 5-30 minutos
- Verifique em: https://dnschecker.org/#A/jrconsultoriamg.com.br
- Deve mostrar: `76.76.21.21` ou resolver para Vercel

## 📋 Resumo dos Registros Corretos

Após a correção, você deve ter:

```
Tipo    | Nome                    | Conteúdo                          | Proxy
--------|-------------------------|-----------------------------------|------
CNAME   | @ (raiz)                | cname.vercel-dns.com.             | OFF
CNAME   | www                     | d3a1b9549633b02d.vercel-dns-016.com. | OFF
A       | @ (raiz) - ALTERNATIVA  | 76.76.21.21                      | OFF
```

**IMPORTANTE:**
- ❌ NÃO pode ter registro A com `216.150.1.1`
- ✅ Deve ter CNAME ou A apontando para Vercel
- ✅ Proxy da Cloudflare deve estar DESABILITADO (nuvem cinza)

## ✅ Verificação Final

Após corrigir, verifique:

1. ✅ Registro A antigo (216.150.1.1) foi REMOVIDO
2. ✅ Domínio raiz aponta para Vercel (CNAME ou A 76.76.21.21)
3. ✅ WWW aponta para Vercel (já está correto)
4. ✅ Cache da Cloudflare limpo
5. ✅ Proxy desabilitado nos registros da Vercel
6. ✅ Domínios válidos no painel Vercel

## 🚨 Por que ainda aparece WordPress?

O registro A `216.150.1.1` está fazendo o domínio raiz apontar para o servidor antigo. Mesmo que o WWW esteja correto, quando alguém acessa `jrconsultoriamg.com.br` (sem www), vai para o servidor antigo.

**Solução:** Remova o registro A antigo e crie um novo apontando para Vercel!
