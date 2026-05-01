# DrivenEXE Landing Page (V2 Premium)

Este módulo contém o site institucional e a landing page oficial do **DrivenEXE**, desenvolvida com foco em performance, design premium e SEO.

## 🚀 Arquitetura

O projeto foi evoluído de uma landing page simples para um site multi-página robusto utilizando:
- **React 18+** & **Vite**
- **React Router Dom** para navegação SPA instantânea.
- **Pure CSS Animations**: Performance fluida sem dependências pesadas de animação.
- **Sistema de i18n Nativo**: Suporte completo a PT-BR e EN (incluindo metatags dinâmicas).

## 📂 Estrutura de Páginas

- `/`: Home (Landing Page consolidada)
- `/features`: Recursos avançados e arquitetura.
- `/workflow`: Fluxo de orquestração guiada.
- `/philosophy`: Princípios de engenharia e visão.
- `/releases`: Log de versões e estabilidade.
- `/privacy` & `/terms`: Conformidade e licença MIT.

## 🛠️ Como Desenvolver

```bash
cd apps/landing
bun install
bun run dev
```

## 📦 Build de Produção

```bash
bun run build
```
O build gerado em `dist/` é estático e pode ser servido por qualquer provedor (Vercel, Netlify, S3, etc).

## 🎨 Design System
- **Estética**: SaaS Premium (inspirado em Linear/Vercel).
- **Fundações**: Grid geométrico, noise texture e tipografia massiva.
- **UX**: Scroll-reset automático em transição de rotas e SEO dinâmico por página.
