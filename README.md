# DrivenEXE Starter Kit

## 🎯 O que é isso?

Este repositório é uma base estruturada para iniciar projetos com consistência, validação e escalabilidade.

⚠️ Isso NÃO é um produto.
É um sistema de fundação reutilizável.

---

## 🚀 Início Rápido

### 1. Instalação do Starter

```bash
# Clone o repositório
git clone https://github.com/drivenexe/drivenexe-starter meu-projeto
cd meu-projeto
```

> **Dica de Automação:** Se você tem a [GitHub CLI](https://cli.github.com/) instalada, pode criar seu repositório remoto e fazer o primeiro push com:
> `gh repo create meu-projeto --public --source=. --remote=origin --push`

### 2. Configuração Inicial

```bash
# Instale as dependências usando Bun
bun install
```

### 3. Validação do Sistema

```bash
# Execute a validação para garantir integridade
bun run validate
```

### 4. Utilização da SKILL

O sistema é guiado via arquivo `SKILL.md`. Abra-o e siga as instruções para os comandos:
* `init`
* `validate`
* `sprint`
* `audit`

---

## 🧩 Tipos de Projeto Suportados

* **Web** → testes com Playwright (localizados em `tests/web/`)
* **Mobile** → testes com Maestro (localizados em `tests/mobile/`)
* **Multiplataforma** → suporte a ambos de forma isolada

---

## ⚠️ Regras do Sistema

* Não alterar a estrutura de pastas sem necessidade técnica.
* Nunca pular a etapa de validação (`bun run validate`).
* Não adicionar lógica de produto/negócio dentro da fundação.

---

## 🧠 Como Funciona

O sistema segue o modelo de execução:
**→ definir → implementar → validar → iterar**

---

## 🚀 Próximo Passo

Após a inicialização, utilize o comando `sprint` na SKILL para definir seu primeiro ciclo de trabalho.
